//buttons
const username = document.getElementById("changeEmail");
const password = document.getElementById("changePassword");
const pass = document.getElementById("save_pass");

//changing the value
const emailBox = document.getElementById("email");
const passwordBox = document.getElementById("password");

//for the password and email
username.onclick = () => {
    let email = prompt("Please enter your email");
    emailBox.value = email;
}
password.onclick = () => {
    let new_password = prompt("Please enter your password");
    passwordBox.value = new_password;
}

//for the pass section
pass.onclick = () => {
    alert("Your current parking pass has been changed successfully");
}