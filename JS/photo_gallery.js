
$(document).ready(function(){
  $('.CurrentImage').slick({
    fade: true,
    asNavFor: '.thumbnail'
  });
  
  $('.thumbnail').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    focusOnSelect: true,
    asNavFor: '.CurrentImage',
  });
  
});
