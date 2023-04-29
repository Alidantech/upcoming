  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        $('header').addClass('scrolled');
      } else {
        $('header').removeClass('scrolled');
      }
    });
  });
  

