var headerNav = $('.header');
var jumbotronHeight = $('.jumbotron').height();
var topPos = '-' + jumbotronHeight;

console.log(headerNav);
console.log(jumbotronHeight);
$(document).ready(function() {

  $(window).scroll(function() {

    if ($(this).scrollTop() > jumbotronHeight && !headerNav.hasClass('header--fixed')) {
      headerNav.addClass('header--fixed');
      headerNav.css('top', top);
      headerNav.animate({
        'top': '0'
      }, 800);
    } else if ($(this).scrollTop() < jumbotronHeight && headerNav.hasClass('header--fixed')) {
      headerNav.animate({
        'top': topPos
      }, {
        complete: function() {
          $(this).after(function() {
            headerNav.removeClass('header--fixed');
          });
        }
      }, 800);
    }
  });
});
