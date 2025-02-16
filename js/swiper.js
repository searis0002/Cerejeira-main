
//横移動スライド サブ
  const swiper_s = new Swiper('.swiper-h-sub', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    effect: "slide",
    slidesPerView: 3,
    slidesPerGroup: 3,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

//横移動スライド メイン
const swiper = new Swiper('.swiper-h', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    effect: "slide",
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    tmubs:{
        swiper: swiper_s,
    },
});

//縦移動スライド メイン
const swipe = new Swiper('.swiper-v', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    speed: 500,
    effect: "slide",
  
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
      hide: true,
    },
  });

  //縦移動スライド サブ
  const swipe_s = new Swiper('.swiper-v-sub', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    speed: 500,
    effect: "slide",
  
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
      hide: true,
    },
  });