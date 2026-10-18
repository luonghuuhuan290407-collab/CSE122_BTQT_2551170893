/**
 * Hàm xử lý khi người dùng bấm vào các mục ở menu dọc bên trái
 * @param {string} topic - Tên chủ đề được chọn
 * @param {Event} event - Sự kiện click chuột
 */
function loadContent(topic, event) {
    // Ngăn chặn hành vi load lại trang mặc định của thẻ <a>
    event.preventDefault();
    // 1. Đổi giao diện active trên menu dọc
    const menuLinks = document.querySelectorAll('.sidebar-menu a');
    menuLinks.forEach(link => link.classList.remove('active'));
    event.currentTarget.classList.add('active');
    // 2. Cập nhật nội dung tương ứng cho phần chính giữa
    const headingElem = document.getElementById('content-heading');
    const displayElem = document.getElementById('dynamic-content');
    switch (topic) {
        case 'html':
            headingElem.innerText = "Bài tập HTML cơ bản";
            displayElem.innerHTML = `
                <p>Thiết kế trang web có nội dung như sau:</p>
                <p class="center-text"><strong>Trung Tâm Tin học – ĐH KHTN</strong></p>
                <p class="center-text">Chào mừng các bạn đến với ngôn ngữ HTML</p>
            `;
            break;
        case 'js-lang':
            headingElem.innerText = "Bài tập Ngôn ngữ JavaScript";
            displayElem.innerHTML = `
                <p>Khám phá các khái niệm cơ bản về biến, hàm, vòng lặp và điều kiện trong JavaScript.</p>
                <p class="center-text"><strong>Thực hành lập trình sự kiện phía Client</strong></p>
            `;
            break;
        case 'js-obj':
            headingElem.innerText = "Các đối tượng trong JavaScript";
            displayElem.innerHTML = `
                <p>Làm việc với các đối tượng cốt lõi như Array, Math, Date, và Document Object Model (DOM).</p>
                <p class="center-text"><strong>Quản lý phần tử HTML bằng JavaScript</strong></p>
            `;
            break;
        case 'css-layout':
            headingElem.innerText = "CSS và bố cục hiện đại";
            displayElem.innerHTML = `
                <p>Tìm hiểu cách xây dựng giao diện đa vùng bằng công nghệ Flexbox và CSS Grid tối ưu.</p>
                <p class="center-text"><strong>Responsive Web Design thực tế</strong></p>
            `;
            break;
        default:
            break;
    }
}
/**
 * Hàm xử lý khi bấm vào các tùy chọn ở hộp menu con màu vàng (#FFE082)
 * @param {string} subTopic - Tên chức năng con
 */
function filterSubContent(subTopic) {
    const displayElem = document.getElementById('dynamic-content');
    if (subTopic === 'dao-chuoi') {
        displayElem.innerHTML = `<p>👉 <strong>Chức năng Đảo chuỗi:</strong> Nhập vào một chuỗi ký tự và hiển thị chuỗi theo chiều ngược lại bằng JavaScript.</p>`;
    } else if (subTopic === 'phan-tich') {
        displayElem.innerHTML = `<p>👉 <strong>Chức năng Phân tích chuỗi:</strong> Đếm số từ, kiểm tra ký tự hoa/thường và phân tích cấu trúc câu.</p>`;
    } else if (subTopic === 'tim-kiem') {
        displayElem.innerHTML = `<p>👉 <strong>Chức năng Tìm và thay thế:</strong> Tìm một từ khóa bất kỳ trong văn bản và thay thế bằng chuỗi mới linh hoạt.</p>`;
    }
}