// PAGE FADING

$(function(){
  'use strict';
  var options = {
    debug: true,
    anchors: 'a',
    onStart: {
      duration: 300,
      render: function ($container) {
        $('.PageContent').addClass('is-exiting');
        console.log("on start");
      }
    },
    onReady: {
      duration: 300,
      render: function ($container, $newContent) {
        $container.html($newContent);
        $('.PageContent').removeClass('is-exiting');
        console.log("on ready");
      }
    }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');
});

$(document).ready(function() {

  // MOBILE NAV

  $('.NavHamburger').click(function() {
    console.log("nav clicked!")
    $('.GlobalNav').toggleClass("Open");
    $(this).toggleClass("Open");
  });

  // PRIVATE EVENT'S GALLERIES

  var sliders = {};

  $('.slider').each(function (index, slider) {
    var id = slider.getAttribute('id');
    console.log(id);
    sliders[id] = $(slider).slick({
        dots:false,
        autoplay:false,
        arrows:false,
        prevArrow:'<button type="button" class="slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-next"></button>',
        slidesToShow:1,
        slidesToScroll:1
    })
  });
  
  $('.slide').click(function() {
    var id = $(this).closest('.slider').get(0).getAttribute('id');
    console.log(id);
    var $slideshow = sliders[id];
    $slideshow.slick('slickGoTo', parseInt($slideshow.slick('slickCurrentSlide'))+1);
  });

  console.log(sliders);

});



