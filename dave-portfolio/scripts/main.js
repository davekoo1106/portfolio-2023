// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//  Burger menu
var icon = document.querySelector('.icon');
var nav = document.querySelector('.header-menu');

console.log(nav.style);
icon.addEventListener('click', function () {

  console.log("button was clicked");
  icon.classList.toggle('active');

  nav.style.display = (nav.style.display !== 'block') ? 'block' : 'none';
});
