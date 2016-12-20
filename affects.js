console.log('affects.js');
$( ".cornerImg" ).hover(
  // console.log('hello');
    function() {
    TweenMax.to($( this ), 0.5, {x:200});
  }
);