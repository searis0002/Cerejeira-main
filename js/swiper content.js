document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".slider-3", {
    slidesPerView: 1, // 1枚ずつ表示
    centeredSlides: true, // 中央配置
    spaceBetween: 60, // スライド間隔
    loop: true, // 無限ループ
    autoplay: {
      delay: 2800, // 自動再生の間隔
      disableOnInteraction: false, // ユーザー操作後も再開
    },
    speed: 1000, // スライドの切り替え速度
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 1.5, // スマホでは少し幅を広く
        spaceBetween: 30,
      },
    },
  });
});
