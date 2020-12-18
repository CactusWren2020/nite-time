/* Mobile Menu Slide Out */

// const mobileMenu = document.querySelector('#mobile-menu');
// const mobileButton = document.querySelector('#mobile-menu-button');
// const hamburgerIcon = document.querySelector('#hamburger-icon');
// const xIcon = document.querySelector('#x-icon');

// function menuToggle(sub) {
// var closed = sub.className.indexOf('closed') !== -1;
// if (closed) {
//     sub.className = sub.className.replace('closed', 'open');
// } else {
//     sub.className = sub.className.replace('open', 'closed');
// }
// hamburgerIcon.classList.toggle('hidden');
//     xIcon.classList.toggle('hidden');
// }

// mobileButton.addEventListener('click', () => menuToggle(mobileMenu));

/* Slide Show */

// const slideScreen = document.querySelector("#large-slide-show");
// const chevronRight = document.querySelector("#chevron-right");
 
// const images = ['./clappingJoker.gif', './Dawkinsphotoshop.jpg', './2500X1037.jpg'];

// let nextImage = 0;

// // doSlideshow();
// chevronRight.addEventListener('click', doSlideshow);

// function doSlideshow() {
//     console.log("hi")
//     if (nextImage >= images.length) {
//         nextImage = 0;
//     }
//     slideScreen
//     .style.backgroundImage = 'url("' + images[nextImage++] + '")';

    // .fadeIn(500,function(){
    //     setTimeout(doSlideshow,1000);
    // });
// }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "inline-flex";  
}