"use strict";$(document).ready(function(){function e(e){e.preventDefault();var l=$($(this).attr("href"));$("html, body").animate({scrollTop:l.offset().top},700)}$(window).width();new Swiper(".kind-js",{slidesPerView:1,spaceBetween:0,pagination:{el:".swiper-pagination",clickable:!0}});if($("[data-scroll]").on("click",e),$(".hamburger").click(function(){$(this).toggleClass("openClose"),$(".mnu-js").toggleClass("mobileMnu-js"),$(".hamburger__line").toggleClass("lineBg"),$(".smoothScroll").fadeToggle()}),$(".mnu-js").click(function(){$(this).removeClass("mobileMnu-js"),$(".hamburger").removeClass("openClose"),$(".hamburger__line").removeClass("lineBg")}),$(window).width()>575){new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0,callback:function(e){},scrollContainer:null}).init()}$(function(){jQuery.scrollSpeed(70,800)})});