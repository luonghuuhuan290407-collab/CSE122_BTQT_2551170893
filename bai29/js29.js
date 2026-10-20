document.addEventListener('DOMContentLoaded', function () {
  console.log("Trang Quản lý danh sách sinh viên (Bài 29) đã sẵn sàng!");

  const pageLinks = document.querySelectorAll('.custom-pagination .page-link');
  
  pageLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      
      if(this.getAttribute('href') === '#') {
        e.preventDefault();
      }
      
      const parentLi = this.parentElement;
      if (!parentLi.classList.contains('disabled') && !this.innerHTML.includes('&')) {

        document.querySelectorAll('.custom-pagination .page-item').forEach(item => {
          item.classList.remove('active');
        });

        parentLi.classList.add('active');
        console.log("Đã chuyển sang trang:", this.innerText);
      }
    });
  });
});