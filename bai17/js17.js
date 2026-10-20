const form = document.getElementById('registerForm');
const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const fullnameError = document.getElementById('fullnameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function setError(input, errorElement, message) {
    input.classList.remove('success');
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.className = 'error-message error-text';
}
function setSuccess(input, errorElement, message) {
    input.classList.remove('error');
    input.classList.add('success');
    errorElement.textContent = message;
    errorElement.className = 'error-message success-text';
}
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    const fullnameValue = fullnameInput.value.trim();
    if (fullnameValue === '') {
        setError(fullnameInput, fullnameError, '✗ Họ và tên không được để trống');
        isValid = false;
    } else {
        setSuccess(fullnameInput, fullnameError, '✓ Hợp lệ');
    }
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        setError(emailInput, emailError, '✗ Email không được để trống');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, emailError, '✗ Email không hợp lệ (thiếu tên miền hoặc sai cấu trúc)');
        isValid = false;
    } else {
        setSuccess(emailInput, emailError, '✓ Hợp lệ');
    }
    const passwordValue = passwordInput.value;
    if (passwordValue === '') {
        setError(passwordInput, passwordError, '✗ Mật khẩu không được để trống');
        isValid = false;
    } else if (passwordValue.length < 6) {
        setError(passwordInput, passwordError, '✗ Mật khẩu phải có ít nhất 6 ký tự');
        isValid = false;
    } else {
        setSuccess(passwordInput, passwordError, '✓ Hợp lệ');
    }
    const confirmPasswordValue = confirmPasswordInput.value;
    if (confirmPasswordValue === '') {
        setError(confirmPasswordInput, confirmPasswordError, '✗ Vui lòng xác nhận mật khẩu');
        isValid = false;
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPasswordInput, confirmPasswordError, '✗ Xác nhận mật khẩu không khớp');
        isValid = false;
    } else {
        setSuccess(confirmPasswordInput, confirmPasswordError, '✓ Hợp lệ');
    }
    if (isValid) {
        alert('Đăng ký tài khoản thành công!');
    }
});
