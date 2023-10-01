function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}


function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function validateForm() {
    var returnval = true;
    clearErrors();
    var name = document.forms['myForm']["fname"].value;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length > 15) {
        seterror("email", "*Length of email is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 11) {
        seterror("phone", "*Length of phone number should be 11 digits");
        returnval = false;
    }

    var password = document.forms['myForm']["fpassword"].value;
    if (password.length < 8) {
        seterror("password", "*Length of password should be atleast 8 characters");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpassword"].value;
    if (cpassword != password) {
        seterror("cpassword", "*Should be same as Password");
        returnval = false;
    }


    return returnval;
}