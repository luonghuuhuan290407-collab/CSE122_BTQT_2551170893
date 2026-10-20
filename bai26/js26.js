document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  const form = document.getElementById('registrationForm');

  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      alert('Đăng ký thành công! Chúc mừng bạn đã tham gia CLB Lập trình Web.');
      form.reset();
      form.classList.remove('was-validated');
      return;
    }
    form.classList.add('was-validated');
  }, false);
});