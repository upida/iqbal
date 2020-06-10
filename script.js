var number = 0;
jQuery.ready(function(){
  $(document).ready(function () {
    $('.arrow').click(function () {
      $('.title').css('font-size', '30px');
      $('.title').css('top', '5%');
      $('.title').css('left', '5.5%');
      $('.title').css('transition-duration', '2s');
      $('.content').css('margin-top', '3%');
      $('.content').css('margin-left', '15%');
      $('#content').fadeOut('500', function () {
        $('#content').load('outdoor.html');
        $('#content').fadeIn('slow', function () {
          $('.menu').css('display', 'block');
          $('.title').html('<a href="/">IQBAL</a>');
          count(number);
        });
      });
    });
    $('#outdoor').click(function () {
      number = 0;
      $('#content').fadeOut('500', function () {
        $('#content').load('outdoor.html');
        $('#content').fadeIn('slow', function () {
          count(number);
        });
      });
    });
    $('#school').click(function () {
      number = 1;
      $('#content').fadeOut('500', function () {
        $('#content').load('school.html');
        $('#content').fadeIn('slow', function () {
          count(number);
        });
      });
    });
    $('#me').click(function () {
      number = 2;

      $('#content').fadeOut('500', function () {
        $('#content').load('me.html');
        $('#content').fadeIn('slow', function () {
          count(number);
        });
      });
    });
  });

});
