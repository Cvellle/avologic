
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
     $('.navbar').css('height','50px');
    //  $('.navbar').css('border','none');
  } else {
     $('.navbar').css('height','150px');
  }
});