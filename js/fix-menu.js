// set fixed menu
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 80) {
      $('.menubar').addClass('fix-menu', 1000);
    } else {
      $('.menubar').removeClass('fix-menu', 1000);
    }
  });