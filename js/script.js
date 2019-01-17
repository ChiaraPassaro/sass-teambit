var $headerNav = $('.header');
var $btnNavbar = $('.header .btn');
var jumbotronHeight = $('.jumbotron').height();
var topPos = '-' + jumbotronHeight;


$(document).ready(function() {

  $(window).scroll(function() {
    if ($(this).scrollTop() > jumbotronHeight && !$headerNav.hasClass('header--fixed')) {

      $headerNav.addClass('header--fixed');
      $headerNav.css('top', top);
      $btnNavbar.removeClass('btn--white').addClass('btn--blue');

      $headerNav.animate({
        'top': '0'
      }, 800);

    } else if ($(this).scrollTop() < jumbotronHeight && $headerNav.hasClass('header--fixed')) {

      $headerNav.animate({
        'top': topPos
      }, {
        complete: function() {
          $(this).after(function() {
            $btnNavbar.removeClass('btn--blue').addClass('btn--white');
            $headerNav.removeClass('header--fixed');
          });
        }
      }, 800);

    }
  });

});
