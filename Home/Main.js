// Slider or Carousel
$(window).on('load',function(){
  console.log("test")
  var $slider = $('.carousel')
  var $slideContainer = $('.carousel-image-container')
  var $slides = $('.carousel-image')
  var currentSlide = 0;
  $('.circle:first-child').addClass('active');


  var slideWidth = $slides.width()
  var slideHeight = $slides.height()


  var slideCount = $slides.length
  var totalWidth = slideCount * slideWidth


  $slider.css({
      width: slideWidth,
      height: slideHeight
  })
  $slideContainer.css({
      width: totalWidth, 
      marginLeft: - slideWidth
  })


  $('#left-arrow').on('click', function(){
      $slideContainer.animate({
          left: +slideWidth
      }, 'slow', 
          () => {
              $('.carousel-image:last-child').prependTo('.carousel-image-container')
              $('.carousel-image-container').css('left', '0')
              currentSlide = (currentSlide - 1 + slideCount) % slideCount
              updateCircleBar()
          })
  })

  $('#right-arrow').on('click', function(){
      $slideContainer.animate({
          left: -slideWidth
      }, 'slow', 
          () => {
              $('.carousel-image:first-child').appendTo('.carousel-image-container')
              $('.carousel-image-container').css('left', '0')
              currentSlide = (currentSlide + 1) % slideCount
              updateCircleBar()
          })
  })

  function updateCircleBar() {
      $('.circle').removeClass('active');
      $('.circle').eq(currentSlide).addClass('active');
  }
})


// Best seller card slider
var slides = document.querySelectorAll('.card');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

var manualNav = function(manual){
  slides.forEach((card) => {
    card.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Recommendation card slider
var slidesrec = document.querySelectorAll('.cardrec');
var btnsrec = document.querySelectorAll('.btnrec');
let currentSlideRec = 1;

var manualNavRec = function(manual){
  slidesrec.forEach((cardrec) => {
    cardrec.classList.remove('active');

    btnsrec.forEach((btnrec) => {
      btnrec.classList.remove('active');
    });
  });

  slidesrec[manual].classList.add('active');
  btnsrec[manual].classList.add('active');
}

btnsrec.forEach((btnrec, i) => {
  btnrec.addEventListener("click", () => {
    manualNavRec(i);
    currentSlideRec = i;
  });
});

repeat();