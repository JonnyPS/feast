// click state for showing background images
$( ".imgContainer" ).click(
   function(){
    // console.log( 'click over' )
    $( this ).find( '.dayImg' ).each( function() {
      TweenMax.to($( this ), 0.5, {alpha:0, delay:0});      
    });
    $( this ).find( '.cornerImg' ).each( function() {
      // console.log( 'click over activate ' )
      TweenMax.to($( this ), 0.1, {alpha:0, delay:0});
    })
      // hide corner image once background image is shown
      $( this ).find( '.cornerImg' ).hide();
  });

// hover states for image corner animation
$('.imgContainer').hover(
  function(){
    // console.log( 'hover over' )
    $( this ).find( '.cornerImg' ).each( function() {
      // console.log( 'hover over activate ' )
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

// intro fade-in animation
function introAnimation() {
  // console.log( 'hello' )
  TweenMax.staggerTo('.imgContainer', 1, {alpha:1}, 0.4);
};

// init intro animation
setTimeout(introAnimation, 3000);