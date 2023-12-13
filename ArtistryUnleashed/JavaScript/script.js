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

    var message = document.forms['myForm']["fmsg"].value;
    if (message.length > 400) {
        seterror("message", "*Length is too long");
        returnval = false;
    }

    


    return returnval;
}