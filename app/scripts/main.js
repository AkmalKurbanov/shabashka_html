$(document).ready(function () {


  // scroll button
  function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 700);
  }
  $('[data-scroll]').on('click', scrollToSection);
  // scroll button end

  // subMenu
  $('.triggerSubmenu-js').on('click', function () {
    $(this).toggleClass('activeTriggerSubMenu-js');
    $(this).next().slideToggle();
  });
  // subMenu end



// select
  $('.selected').on('click', function () {
    $('.selectList').slideToggle();
  });
// select end


  // animation
  if ($(window).width() > 575) {
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true,
      callback: function (box) {

      },
      scrollContainer: null
    });
    wow.init();
  }
  // animation end
  // hamburger
  $('.hamburger').click(function () {
    $(this).toggleClass('openClose');
    $('.mnu-js').toggleClass('mobileMnu-js');
    $('.hamburger__line').toggleClass('lineBg');
  });

  $('.mnu-js').click(function () {
    $('.hamburger').removeClass('openClose');
    $('.hamburger__line').removeClass('lineBg');
  });
  // hamburger end

  // preloader
  $(window).on('load', function () {
    $('.preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });
  // preloader end

  // slider

  var swiper = new Swiper('.kind-js', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true,
    },
    breakpoints: {
      1199: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    }
  });



  var swiper = new Swiper('.facts-js', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-nexta',
      prevEl: '.swiper-button-preva',
      clickable: true,
    },
    breakpoints: {
      1199: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
    }

  });


  var swiper = new Swiper('.news-js', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  var swiper = new Swiper('.simelarNews-js', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-nextNews',
      prevEl: '.swiper-button-prevNews',
    },
    breakpoints: {
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    }
  });



  // slider end

  // trigger filter
  $('.trigger-js').on('click', function () {
    $('.tours__checkWraphidden').slideToggle();
  });
  // trigger filterend









});
