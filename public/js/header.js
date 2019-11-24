
// document.addEventListener('mouseover', function (event) {

//   if (event.target.matches('.nav-link')) {
//     //alert("s")
//     event.target.nextElementSibling.style.width="100%";
//   }
// }
// );

// document.addEventListener('mouseleave', function (event) {

//   if (event.target.matches('.nav-link')) {
//     //alert("s")
//     event.target.nextElementSibling.style.width="0%";
//   }
// }
// );


$(document).on("mouseenter",".nav-link",function(e){
    e.target.nextElementSibling.firstElementChild.style.transition="1.5s";
    e.target.nextElementSibling.firstElementChild.style.width="100%";
});

$(document).on("mouseleave",".nav-link",function(e){
  e.target.nextElementSibling.firstElementChild.style.transition="0.5";
  e.target.nextElementSibling.firstElementChild.style.width="0%";
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('.navbar').css('transform','translatey(-100px)');
     $('.navbar').css('transiotion','2s');
     $('.navbar').css('background','transparent !important');
     $('.navbar').css('border-bottom','2px solid rgba(128, 128, 128, 0.1)');
  } else {
     $('.navbar').css('transform','translatey(0px)');
     $('.navbar').css('border-bottom','2px solid rgba(128, 128, 128, 0.6)');
  }
});

var media = window.matchMedia("(max-width: 905px)");

if (media.matches) {
  $(window).scroll(function(){
      if ($(this).scrollTop() > 50) {
         $('.navbar').css('transform','translatey(0px)');
         $('.navbar').css('transiotion','2s');
         $('.navbar').css('background','transparent !important');
      } else {
         $('.navbar').css('transform','translatey(0px)');
      }
   }); 
  }





// function debounce(func, wait = 20, immediate = true) {
//   var timeout;
//   return function() {
//     var context = this, args = arguments;
//     var later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// };

// const sliderImages = document.querySelectorAll('.homeStats');

// function checkSlide() {
//   sliderImages.forEach(sliderImage => {
//     // half way through the image
//     const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
//     // bottom of the image
//     const imageBottom = sliderImage.offsetTop + sliderImage.height;
//     const isHalfShown = slideInAt > sliderImage.offsetTop;
//     const isNotScrolledPast = window.scrollY < imageBottom;
//     if (isHalfShown && isNotScrolledPast) {
//       sliderImage.classList.add('active');
//     } else {
//       sliderImage.classList.remove('active');
//     }
//   });
// }

// window.addEventListener('scroll', debounce(checkSlide));