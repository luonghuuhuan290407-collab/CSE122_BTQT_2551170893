
document.addEventListener('DOMContentLoaded', function () {
  console.log("Trang Web Bài 27 đã sẵn sàng!");

  const orderButtons = document.querySelectorAll('.modal-footer .btn-danger');
  
  orderButtons.forEach(button => {
    button.addEventListener('click', function () {
      alert("Cảm ơn bạn đã quan tâm! Chúng tôi sẽ liên hệ tư vấn tour trong thời gian sớm nhất.");
    });
  });
});