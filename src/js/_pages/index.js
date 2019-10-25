
// query loader
window.addEventListener('DOMContentLoaded', function() {
  QueryLoader2(document.querySelector("body"), {
      barColor: "#efefef",
      backgroundColor: "#111",
      percentage: true,
      barHeight: 1,
      minimumTime: 200,
      fadeOutTime: 1000
  });
});

// smooth croll function
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	  // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
		  var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


$(document).ready(function()
{
  // Mobile layer section1 
  $('.bottom').on('click', () =>
  {
    $('.screen').toggleClass('active')
  })

  // product-image-slider
  $(".img-product").on('click mouseover', (e) => 
    {
    e.preventDefault()
      let value =  $(this)[0].activeElement.attributes.href.nodeValue
      $('.imgBox img').attr("src", value)
    })

  // screen-overlay section
  $('.toggle').on('click', () =>
  {
    $('.toggle').toggleClass('active')
    $('.navigation').toggleClass('active')
  })

  // this line can be coded by html (encourage). This file belong to business layer so this shoundn't write here
  // $('.video-full-screen').vide('../../videos/videoFroBg')

  $('.hover-card-tiltjs .container .row .col-md-4 .card').tilt({
    glare: true,
    maxGlare: .5,
    scale: 1.2
  })
})