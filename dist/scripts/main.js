"use strict";$(document).ready(function(){function e(e){e.preventDefault();var i=$($(this).attr("href"));$("html, body").animate({scrollTop:i.offset().top},700)}$(window).on("load",function(){$(".preloader").fadeOut("slow",function(){$(this).remove()})});new Swiper(".kind-js",{slidesPerView:3,spaceBetween:30,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",clickable:!0},breakpoints:{1199:{slidesPerView:2,spaceBetween:10},767:{slidesPerView:1,spaceBetween:0}}}),new Swiper(".facts-js",{slidesPerView:4,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-nexta",prevEl:".swiper-button-preva",clickable:!0},breakpoints:{1199:{slidesPerView:3,spaceBetween:10},991:{slidesPerView:2,spaceBetween:10},767:{slidesPerView:2,spaceBetween:0},575:{slidesPerView:1,spaceBetween:50}}});if($(".trigger-js").on("click",function(){$(".tours__checkWraphidden").slideToggle()}),$("[]").on("click",e),$(".hamburger").click(function(){$(this).toggleClass("openClose"),$(".mnu-js").toggleClass("mobileMnu-js"),$(".hamburger__line").toggleClass("lineBg")}),$(".mnu-js").click(function(){$(".hamburger").removeClass("openClose"),$(".hamburger__line").removeClass("lineBg")}),$(window).width()>575){new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0,callback:function(e){},scrollContainer:null}).init()}});