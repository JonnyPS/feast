console.log('affects.js');
$( ".cornerImg" ).mouseover(
  // console.log('hello');
    function() {
    TweenMax.to($( this ), 0.1, {alpha:1, delay:0});
    TweenMax.to($( this ), 0.5, {scale:2, transformOrigin:("100% 100%"), delay:0});
  }
);
$( ".cornerImg" ).mouseout(
  // console.log('hello');
    function() {
    TweenMax.to($( this ), 0.3, {scale:0.5, transformOrigin:("100% 100%")});
    TweenMax.to($( this ), 0.1, {alpha:0, delay:0.2});
  }
);

$( ".dayImg" ).click(
  // console.log('hello');
    function() {
    TweenMax.to($( this ), 0.3, {alpha:0, delay:0});
  }
);