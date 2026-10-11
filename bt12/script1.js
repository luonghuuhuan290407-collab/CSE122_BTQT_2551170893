const tenThu = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
document.getElementById('btn-print').addEventListener('click', function() {
    // 1. Lấy giá trị ngày, tháng, năm do người dùng nhập vào
    let ngay = parseInt(document.getElementById('input-day').value);
    let thang = parseInt(document.getElementById('input-month').value) - 1;
    let nam = parseInt(document.getElementById('input-year').value);
    let dateObj = new Date(nam, thang, ngay);
    document.getElementById('year-display').innerText = dateObj.getFullYear();
    document.getElementById('month-display').innerText = "Tháng " + (dateObj.getMonth() + 1);
    document.getElementById('day-display').innerText = dateObj.getDate();
    let thuIndex = dateObj.getDay();
    document.getElementById('weekday-display').innerText = tenThu[thuIndex];
    let gioHienTai = new Date().getHours();
    let cauChao = "Chào buổi ngày!";
    if (gioHienTai >= 4 && gioHienTai < 11) {
        cauChao = "Chào buổi sáng!";
    } else if (gioHienTai >= 11 && gioHienTai < 13) {
        cauChao = "Chào buổi trưa!";
    } else if (gioHienTai >= 13 && gioHienTai < 18) {
        cauChao = "Chào buổi chiều!";
    } else {
        cauChao = "Chào buổi tối!";
    }
    document.getElementById('greeting-display').innerText = cauChao;
});