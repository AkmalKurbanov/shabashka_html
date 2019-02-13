$(document).ready(function () {

  // header

  $(window).scroll(function () {

    if ($(this).scrollTop() > 400) {
      $('.header').fadeOut();
    } else {
      $('.header').fadeIn();
    }
  });

  // header end



  // mainSlider

  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // mainSlider end


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

  // hamburger
  $('.hamburger').click(function () {
    $(this).toggleClass('openClose');
    $('.mnu-js').toggleClass('mobileMnu-js');
    $('.hamburger__line').toggleClass('lineBg');
  });

  $('.mnu-js').click(function () {
    $(this).removeClass('mobileMnu-js');
    $('.hamburger').removeClass('openClose');
    $('.hamburger__line').removeClass('lineBg');
  });
  // hamburger end





});
