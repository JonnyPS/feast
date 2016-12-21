// console.log('affects.js');
// $( ".cornerImg" ).mouseover(
//   // console.log('hello');
//     function() {
//     TweenMax.to($( this ), 0.1, {alpha:1, delay:0});
//     TweenMax.to($( this ), 0.5, {scale:2, transformOrigin:("100% 100%"), delay:0});
//   }
// );
// $( ".cornerImg" ).mouseout(
//   // console.log('hello');
//     function() {
//     TweenMax.to($( this ), 0.3, {scale:0.5, transformOrigin:("100% 100%")});
//     TweenMax.to($( this ), 0.1, {alpha:0, delay:0.2});
//   }
// );

$( ".imgContainer" ).click(
  // console.log('click');
   function(){
    console.log( 'click over' )
    $( this ).find( '.dayImg' ).each( function() {
      TweenMax.to($( this ), 0.5, {alpha:0, delay:0});      
    });
    $( this ).find( '.cornerImg' ).each( function() {
      console.log( 'click over activate ' )
      TweenMax.to($( this ), 0.1, {alpha:0, delay:0});
    })
      $( this ).find( '.cornerImg' ).hide();

  });

$('.imgContainer').hover(
  function(){
    console.log( 'hover over' )
    $( this ).find( '.cornerImg' ).each( function() {
      console.log( 'hover over activate ' )
      TweenMax.to($( this ), 0.1, {alpha:1, delay:0});
      TweenMax.to($( this ), 0.5, {scale:2, transformOrigin:("100% 100%"), delay:0});
    })
  },
  function(){
    $( this ).find( '.cornerImg' ).each( function() {
      TweenMax.to($( this ), 0.3, {scale:0.5, transformOrigin:("100% 100%")});
      TweenMax.to($( this ), 0.1, {alpha:0, delay:0.2});
    })
  }
);

(function() {
  console.log( 'hello' )
  TweenMax.staggerTo('.imgContainer', 1, {alpha:1}, 0.4);
}
)();