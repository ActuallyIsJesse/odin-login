const passwordInput = document.querySelector(".password-input");
const passwordConfirm = document.querySelector(".password-confirm");
const passwordDiv = document.querySelector(".password-row");
const errorWrapper = document.createElement('div')
const error = document.createElement("p");
error.textContent = "*Passwords do not match";
error.classList.add('error-message');
errorWrapper.appendChild(error);

function comparePasswords(input1, input2) {
    {
        input1.classList.remove('error');
        input2.classList.remove('error');
        errorWrapper.remove();
        if (input1.value !== input2.value) {
            input1.classList.add('error');
            input2.classList.add('error');
            passwordDiv.after(errorWrapper);
        }
    }
}

passwordInput.addEventListener('input', () => {
 comparePasswords(passwordInput, passwordConfirm)
});

passwordConfirm.addEventListener('input', () => {
    comparePasswords(passwordConfirm, passwordInput)
});
