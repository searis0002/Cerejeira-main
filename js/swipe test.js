const swipe = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPreView: 1,
    spaceBetween: 0,
    speed: 500,
    effect: "slide",
    type: "bullets",
    centeredSlides:"true",
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      clickable: true,
      hide: true,
    },
});

const swipecol = new Swiper('.swipercol', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPreView: 1,
    spaceBetween: 0,
    speed: 500,
    effect: "slide",
    type: "bullets",
    centeredSlides:"true",
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      clickable: true,
      hide: true,
    },
  });