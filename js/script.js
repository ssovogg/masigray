// html, css, js 로딩완료
$(document).ready();

// html, css, js ~ 멀티미디어까지 로딩완료
window.onload = function() {
  // visual 슬라이드
  new Swiper('.sw-visual', {
    loop: true, // true일경우 무한루프
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, // 터치했을때 자동플레이 멈춤 X(false)
    },
    speed: 1000,
    navigation: {
      prevEl: '.sw-visual-prev',
      nextEl: '.sw-visual-next',
    }
  });

  // items 슬라이드
  new Swiper('.sw-items', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,

    navigation: {
      prevEl: '.sw-items-prev',
      nextEl: '.sw-items-next',
    },

    pagination: {
      el: '.sw-items-pg',
    }
  });

  // bevarage 슬라이드 
  new Swiper('.sw-bevarage', {
    loop: true,
    navigation: {
      prevEl: '.sw-bv-prev',
      nextEl: '.sw-bv-next',
    },
    pagination: {
      el: '.sw-bv-pg',
    }
  })
}