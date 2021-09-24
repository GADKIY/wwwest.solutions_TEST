"use strict";

$(function () {
  var slider = $('#lightSlider').lightSlider({
    item: 1
  });
  $('#prevSlide').on('click', function () {
    slider.goToPrevSlide();
  });
  $('#nextSlide').on('click', function () {
    slider.goToNextSlide();
  });
});