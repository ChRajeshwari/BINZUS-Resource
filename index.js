const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 40,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });

  let bt=document.querySelectorAll(".bt1");
  let swi=document.querySelectorAll(".swiper-slide");

  swi.addEventListener("mousemove",function(){
   
    bt.style.display="block";
    
  })
  swi.addEventListener("mouseout",function(){
   
    bt.style.display="none";
    
  })