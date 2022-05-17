function myFunction() {
    var unm = document.forms['subform']['uname'].value;
    var psw = document.forms['subform']['pasw'].value;

    if (!isEmpty(unm, 'Username') && !isEmpty(psw, 'Password')) {
        alert('Login Successful');
        window.location.href = 'profile.html';
        return true;
    } else {
        return false;
    }
}

function isEmpty(elemValue, field) {
    if (elemValue == '' || elemValue == null) {
        alert('you can not have ' + field + ' field empty');
        return true;
    } else {
        return false;
    }
}