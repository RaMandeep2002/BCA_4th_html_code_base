function register_form() {
    var unm = document.forms['register']['uname'].value;
    var eml = document.forms['register']['email'].value;
    var psw = document.forms['register']['pasw'].value;
    var cpsw = document.forms['register']['cpasw'].value;

    if (unm == null || unm == '') {
        alert("Username can't be blank");
        return false;
    } else {
        return true;
    }

    if (eml == null || eml == '') {
        alert("Email can't be blank");
        return false;
    }
}