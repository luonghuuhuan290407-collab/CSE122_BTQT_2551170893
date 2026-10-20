document.addEventListener('DOMContentLoaded', function () {
  console.log("Bảng điều khiển (Bài 30) đã sẵn sàng hoạt động!");

  const sidebarLinks = document.querySelectorAll('#sidebar .nav-link');
  
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      
      sidebarLinks.forEach(item => item.classList.remove('active'));
      
      this.classList.add('active');
      
      console.log("Đã chuyển sang mục quản trị:", this.innerText.trim());
    });
  });
});