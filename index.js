passwordInput = document.querySelector(".password-input");
passwordConfirm = document.querySelector(".password-confirm");

passwordInput.addEventListener('input', () => {
    passwordInput.classList.remove('error');
    passwordConfirm.classList.remove('error');
    if (passwordInput.value !== passwordConfirm.value) {
        passwordInput.classList.add('error');
        passwordConfirm.classList.add('error')
    }
});
passwordConfirm.addEventListener('input', (e) => {
    passwordInput.classList.remove('error');
    passwordConfirm.classList.remove('error');
    if (passwordInput.value !== passwordConfirm.value) {
        passwordInput.classList.add('error');
        passwordConfirm.classList.add('error')
    }
});