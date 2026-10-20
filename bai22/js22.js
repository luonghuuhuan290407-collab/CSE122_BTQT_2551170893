const themeToggle = document.getElementById('theme-toggle');
const statusText = document.getElementById('status-text');

themeToggle.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('toi');
        statusText.textContent = 'Đang ở chế độ TỐI (đang bật).';
    } else {
        document.body.classList.remove('toi');
        statusText.textContent = 'Đang ở chế độ SÁNG.';
    }
});