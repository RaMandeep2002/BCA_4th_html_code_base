function register_form() {
    var uname = document.register.uname;
    var email = document.register.email;
    var Aname = document.register.Aname;
    var phone = document.register.phone;
    var password = document.register.password;
    var pasw = document.register.pasw;

    if (uname.value.length <= 0) {
        alert('Username is required');
        uname.focus();
        return false;
    }
    if (email.value.length <= 0) {
        alert('Email is required');
        email.focus();
        return false;
    }
    if (Aname.value.length <= 0) {
        alert('Address is required');
        Aname.focus();
        return false;
    }
    if (phone.value.length <= 0) {
        alert('Phone number is required');
        phone.focus();
        return false;
    }
    if (password.value.length <= 0) {
        alert('Password is required');
        password.focus();
        return false;
    }
    if (pasw.value.length <= 0) {
        alert('confirm password is required');
        pasw.focus();
        return false;
    }
    // elif(password.value != pasw.value) {
    //     alert('Password does not match');
    //     pasw.focus();
    //     return false;
    // }
}