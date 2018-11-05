console.log('script.js says "I\'m here"');


var whichToShow = Math.floor(Math.random() * $('.container').length);
$('.container').hide().eq(whichToShow).fadeIn();

