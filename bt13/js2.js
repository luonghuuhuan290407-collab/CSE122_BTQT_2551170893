function HienThiDongHo() {
    var d = new Date();
    var gio = d.getHours();
    var phut = d.getMinutes();
    var giay = d.getSeconds();

    // Tách giờ thành 2 chữ số (hàng chục và hàng đơn vị)
    var h1 = Math.floor(gio / 10);
    var h2 = gio % 10;

    // Tách phút thành 2 chữ số
    var m1 = Math.floor(phut / 10);
    var m2 = phut % 10;

    // Tách giây thành 2 chữ số
    var s1 = Math.floor(giay / 10);
    var s2 = giay % 10;

    // Gán hình ảnh tương ứng cho các thẻ img dựa vào thuộc tính name
    document.images["h1"].src = "Anh/Bai13/" + h1 + ".gif";
    document.images["h2"].src = "Anh/Bai13/" + h2 + ".gif";
    
    document.images["m1"].src = "Anh/Bai13/" + m1 + ".gif";
    document.images["m2"].src = "Anh/Bai13/" + m2 + ".gif";
    
    document.images["s1"].src = "Anh/Bai13/" + s1 + ".gif";
    document.images["s2"].src = "Anh/Bai13/" + s2 + ".gif";

    // Đổi lời chào theo buổi
    var thongBao = document.getElementById("txtChao");
    if (gio >= 4 && gio < 12) {
        thongBao.innerHTML = "Chào buổi sáng";
    } else if (gio >= 12 && gio < 14) {
        thongBao.innerHTML = "Chào buổi trưa";
    } else if (gio >= 14 && gio < 18) {
        thongBao.innerHTML = "Chào buổi chiều";
    } else {
        thongBao.innerHTML = "Chào buổi tối";
    }
}

// Chạy hàm đồng hồ lặp lại sau mỗi 1 giây (1000 mili-giây)
setInterval("HienThiDongHo()", 1000);