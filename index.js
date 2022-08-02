const passwordConfirm = document.querySelector("#confirm_password")
const password = document.querySelector("#password");
const messageBox = document.querySelector(".message-box")

function confirmPassword() {
    const password = document.querySelector("#password").value;
    const passwordConfirm = document.querySelector("#confirm_password").value;

    if (password != passwordConfirm) {
        messageBox.textContent = "Passwords don't match"
    }
    else {
        messageBox.textContent = ""
    }
}

passwordConfirm.addEventListener("input", confirmPassword)
password.addEventListener("input", confirmPassword)