function validateDataSignIn(event){
    // username
    var username = document.getElementById("username");
    var errorMsgs = document.getElementById("error-msg");

    // password
    var password = document.getElementById("password");

    
    // validation username
    if(username.value.length < 1) {
        errorMsgs.innerHTML = "Fill the username!";
        errorMsgs.style.color = "red";
        event.preventDefault()
    }


    // validation password
    else if (!isAlpNum(password.value)) {
        errorMsgs.innerHTML = "Fill the password and must be alpha numeric!"
        errorMsgs.style.color = "red";
        event.preventDefault()
    }

    else {
        errorMsgs.innerHTML = "";
        alert("Sign In Success!")
        event.preventDefault()
        window.location.href = "/Home/Main.html"
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