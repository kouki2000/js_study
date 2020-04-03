$(function(){
    var swiper = new Swiper('.swiper-container', {
        effect:'coverflow',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    speed:1500,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
  });
});