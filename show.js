// var number = 0;
var me = ['img/me/1.jpeg', 'img/me/2.jpeg', 'img/me/3.jpeg'];
var outdoor = [
  'img/outdoor/1.jpeg',
  'img/outdoor/2.jpeg',
  'img/outdoor/3.jpeg',
  'img/outdoor/4.jpeg',
  'img/outdoor/5.jpeg',
  'img/outdoor/6.jpeg',
  'img/outdoor/7.jpeg',
  'img/outdoor/8.jpeg',
];
var school = [
  'img/school/1.jpeg',
  'img/school/2.jpeg',
  'img/school/3.jpeg',
  'img/school/4.jpeg',
  'img/school/5.jpeg',
  'img/school/6.jpeg',
];
var menu = ['outdoor', 'school', 'me'];
// $(document).ready(function () {
//   console.log(number);
//   count(number);
// });
function count(x) {
  if (x == 0) {
    let list = outdoor;
    number = 1;
    images(list);
  } else if (x == 1) {
    let list = school;
    images(list);
  } else if (x == 2) {
    let list = me;
    images(list);
  }
}
function images(page) {
  let value = 0;
  console.log(page[value]);
  $('.item-show').attr('src', page[value]);
  $('.next-show').click(function () {
    $('#show').fadeOut('slow', function () {
      if (value < page.length - 1) {
        $('#show').fadeIn('slow');
        console.log((value = value + 1));
        $('.item-show').attr('src', page[value]);
      } else {
        $('#show').fadeIn('slow');
        console.log((value = 0));
        $('.item-show').attr('src', page[value]);
      }
    });
  });
}
