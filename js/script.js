// html, css, js 로딩완료
$(document).ready(function () {
  // ========== 메인메뉴 기능 ==========
  let header = $('.header');
  let headerTop = $('.header-top');
  let headerMain = $('.header-main');
  let gnb = $('.gnb');

  gnb.mouseenter(function () {
    headerMain.addClass('header-main-show');
  });
  gnb.mouseleave(function () {
    headerMain.removeClass('header-main-show');
  });

  // 스크롤시 기능
  $(window).scroll(function () {
    // 스크롤바의 위치를 파악한다. (몇픽셀 내려와있는지)
    let temp = $(window).scrollTop();
    // .header-top 숨기기
    if (temp > 0) {
      header.addClass('header-fix');
      headerTop.addClass('header-top-close');
    } else {
      header.removeClass('header-fix');
      headerTop.removeClass('header-top-close');
    }
  });

  // ========== 모바일 메뉴 기능 ==========
  // 펼침 메뉴
  let mb_menu_li = $('.mb-menu > li');
  let mb_mainmenu = $('.mb-menu > li > a');
  let mb_submenu = $('.mb-submenu');

  $.each(mb_mainmenu, function (index) {
    $(this).click(function (event) {
      // href를 막아준다.
      event.preventDefault();

      // 클릭시 현재 포커스 클래스가 있는지 검토
      let temp = $(this).hasClass('mb-menu-focus');

      if (temp) {

        // 포커스 색상 적용해제
        $(this).removeClass('mb-menu-focus');
        // 아이콘 모션 해제
        $(this).removeClass('mb-icon-rot');
        // 펼쳐진 해당 서브메뉴를 닫아준다
        mb_submenu.eq(index).hide();

      } else {

        // 일단 모두 숨겨라
        mb_submenu.hide();
        // 일단 모든 포커스 색상 해제
        mb_mainmenu.removeClass('mb-menu-focus');
        // 일단 아이콘 아이콘 모션 해제
        mb_mainmenu.removeClass('mb-icon-rot');

        // 포커스 색상 적용
        $(this).addClass('mb-menu-focus');
        // 아이콘 모션 적용
        $(this).addClass('mb-icon-rot');
        // 해당 서브메뉴 열기
        mb_submenu.eq(index).show();
      }
    });
  });

  // 모바일 메뉴 여닫기
  let mb_bt = $('.mb-bt');
  let mb_close = $('.mb-close');
  let mb_wrap = $('.mb-wrap');
  let mb_dim = $('.mb-dim');

  mb_bt.click(function () {
    mb_dim.show();
    mb_wrap.addClass('mb-wrap-open');
  });

  mb_close.click(function () {
    mb_dim.hide();
    mb_mainmenu.removeClass('mb-menu-focus');
    mb_submenu.hide();
    mb_wrap.removeClass('mb-wrap-open');
  });

  // 모바일 메뉴 반응형 처리
  $(window).resize(function () { // 화면 크기조정할때
    let temp = $(window).width();
    if (temp > 760) { // 화면너비가 760보다 클때
      mb_dim.hide();
      mb_wrap.removeClass('mb-wrap-open');
      mb_mainmenu.removeClass('mb-menu-focus');
      mb_mainmenu.removeClass('mb-icon-rot');
      mb_submenu.hide();
    };
  });

  // 위로가기 기능
  let go_top = $('.gotop');
  go_top.click(function(){
    $('html').animate({scrollTop: 0}, 700);
  });

});

// html, css, js ~ 멀티미디어까지 로딩완료
window.onload = function () {
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