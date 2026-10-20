document.addEventListener('DOMContentLoaded', function () {
  
  
  const carouselElement = document.querySelector('#destinationCarousel');
  if (carouselElement) {
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 3000, 
      ride: 'carousel'
    });
  }

  const tabList = document.querySelectorAll('#destinationTab button[data-bs-toggle="pill"]');
  tabList.forEach(tab => {
    tab.addEventListener('shown.bs.tab', function (event) {
      console.log('Bạn vừa chuyển sang tab:', event.target.innerText);
    });
  });

});