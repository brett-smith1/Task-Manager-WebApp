//Check that user's password and 'confirm password' inputs match
function validatePassword() {
    if (document.getElementById("pass").value == document.getElementById("passConfirm").value) {
        document.getElementById("passConfirm").className = "MssaValid";
        document.getElementById("passConfirm").setCustomValidity("");
        return true;
    }
    else {
        //set background of passConfirm text block to pink (MssaInvalid class)
        document.getElementById("passConfirm").className = "MssaInvalid";

        //set custom validity error to display if passwords do not match
        document.getElementById("passConfirm").setCustomValidity("Passwords do not match. Please check your password and try again.");
        document.getElementById("passConfirm").reportValidity;
        return false;
    }
        
}

//Check that user's password and 'confirm password' inputs match, display alert window if they do not
function validateForm() {
    if (document.getElementById("pass").value == document.getElementById("passConfirm").value) {
        return true;
    }
    else {
        //Alert window if passwords to not match on submit
        window.alert("Passwords do not match")
        return false;
    }
    
}