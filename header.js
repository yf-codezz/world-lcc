$(document).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 150) { //150pxスクロールすると起動
      $('.header').css('background-color', '#3C3C3C');
      $('.header').css('filter', 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))');
      $('.floating').css('display', 'block');


    } else { //スクロールしていないときは起動しない
      $('.header').css('background-color', 'rgba(255, 255, 255, 0.1)');
      $('.header').css('filter', 'unset');
      $('.floating').css('display', 'none');
    }
});
