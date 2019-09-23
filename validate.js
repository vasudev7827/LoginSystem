function validateCred() {
    let uname = document.LoginForm.uname.value;
    let pwd = document.LoginForm.pwd.value;
    if (uname == "" || pwd == "") {
        alert("University Registration number and Password cannot be null");
        return false;
    }
    else
        return true;
}