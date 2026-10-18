/**
 * Hàm xử lý khi người dùng click vào một bức ảnh địa danh bất kỳ
 * @param {string} placeName - Tên địa danh được chọn
 */
function selectImage(placeName) {
    console.log("Đã chọn địa danh: " + placeName);
    // Hiển thị thông báo nhỏ hoặc tương tác giao diện khi click vào ảnh
    alert("Bạn đã chọn khám phá danh thắng: " + placeName);
}