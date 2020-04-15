window.addEventListener("scroll", scrollHeader);

function scrollHeader(e) {
   const navBar = document.querySelector(".navbar");
   const navToggler = document.querySelector(".navbar .navbar-toggler");

   if (window.scrollY > 50) {
     navBar.style.transform = "translatey(-100px)"; 
    } else {    
      navBar.style.transform = "translatey(0px)"; 
    }


var media = window.matchMedia("(max-width: 905px)");

if (media.matches) {
   if (window.scrollY > 50) {
      navBar.style.transform = "translatey(-26px)";
      navBar.style.background = "rgba(0, 0, 0, 0.305)";
     } else {    
       navBar.style.transform = "translatey(0px)"; 
       navBar.style.background = "rgba(0, 0, 0, 0.705)";
     }
  }
}

$(document).on("mouseenter",".nav-link",function(e){
    e.target.nextElementSibling.firstElementChild.style.transition="1.5s";
    e.target.nextElementSibling.firstElementChild.style.width="100%";
});

$(document).on("mouseleave",".nav-link",function(e){
  e.target.nextElementSibling.firstElementChild.style.transition="0.5";
  e.target.nextElementSibling.firstElementChild.style.width="0%";
});


// Jquey

// $(window).scroll(function(){
//   if ($(this).scrollTop() > 50) {
//      $('.navbar').css('transform','translatey(-100px)');
//      $('.navbar').css('transiotion','2s');
//      $('.navbar').css('background','transparent !important');
//      $('.navbar').css('border-bottom','2px solid rgba(128, 128, 128, 0.1)');
//   } else {
//      $('.navbar').css('transform','translatey(0px)');
//      $('.navbar').css('border-bottom','2px solid rgba(128, 128, 128, 0.6)');
//   }
// });
