function validateData(event){
    // username
    var username = document.getElementById("username");
    var errorMsgs = document.getElementById("error-msg");

    // email
    var email = document.getElementById("email");

    // password
    var password = document.getElementById("password");

    // confirm Password
    var confPw = document.getElementById("confirm");

    // Gender
    var male = document.getElementById("maleBtn");
    var female = document.getElementById("femaleBtn");

    // Agreement
    var cb = document.getElementById("checkBox");
    
    // validation username
    if(username.value.length < 2) {
        errorMsgs.innerHTML = "Username must more than 2 characters";
        errorMsgs.style.color = "red";
        event.preventDefault()
    }

    // validation email
    else if (!email.value.endsWith("@gmail.com")) {
        errorMsgs.innerHTML = "Email must ends with @gmail.com";
        errorMsgs.style.color = "red";
        event.preventDefault()
    }

    // validation password
    else if (!isAlpNum(password.value)) {
        errorMsgs.innerHTML = "Password must be alpha numeric"
        errorMsgs.style.color = "red";
        event.preventDefault()
    }

    // Confirm Password
    else if (password.value != confPw.value) {
        errorMsgs.innerHTML = "Password and Confirm Password must be same"
        errorMsgs.style.color = "red";
        event.preventDefault()
    }

    // Validation Gender
    else if (!male.checked && !female.checked) {
        errorMsgs.innerHTML = "Choose the Gender!"
        errorMsgs.style.color = "red";
        event.preventDefault()
    }

     // Validation Checkbox
     else if (!cb.checked) {
        errorMsgs.innerHTML = "You must agree our Terms and Conditions"
        errorMsgs.style.color = "red";
        event.preventDefault()
    }

    else {
        errorMsgs.innerHTML = "";
        alert("Register success!!")
        event.preventDefault()
        window.location.href = "/Sign In/signin.html"
    }
    
    return false
}

function isAlpNum(password) {
    var isAlp = false;
    var isNum = false;

    for (let i = 0; i < password.length; i++){
        if (isNaN (password[i])) {
            isAlp = true;
        }
        else {
            isNum = true;
        }
        if (isAlp && isNum) {
            return true;
        }
    }
    return false;
}