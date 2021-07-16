$('.pagescroll').on('click', function (e) {
  var destination = $(this).attr('href');
  var elemenDestination = $(destination);

  $('body').animate({
    scrollTop: elemenDestination.offset().top - 50
  }, 1250, 'easeInOutExpo');

  e.preventDefault();

});

// Parallax
// About
$(window).on('load', function () {
  $('.about__left').addClass('.show__text');
  $('.about__right').addClass('.show__text');
})



$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // portfolio
  if (wScroll > $('.projects').offset().top - 250) {
    $('.projects .card').each(function (i) {
      setTimeout(function () {
        $('.projects .card').eq(i).addClass('showcase');
      }, 300 * (i + 1));
    });
  }

})

console.log("Oke")