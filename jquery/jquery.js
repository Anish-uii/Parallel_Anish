// Load jquery after the DOM is loaded
$(document).ready(function () {
  // Showing and hiding navbar on hamburger click
  $('.hamburger').click(function () {
    $('header .navbar nav ul').toggle();
  });
  // Reseting the original display as before when resized again
  $(window).resize(function () {
    var win_size = $(window).width();
    if (win_size > 992) {
      $('header .navbar nav ul').css('display', 'flex');
    }
    else
    $('header .navbar nav ul').css('display', 'none');
  });
});
