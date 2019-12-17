//tab stuff

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//second gallery on page

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2((slideIndex2 += n));
}

function currentSlide2(n) {
  showSlides2((slideIndex2 = n));
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";
}

//third gallery

var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3((slideIndex3 += n));
}

function currentSlide3(n) {
  showSlides3((slideIndex3 = n));
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("dot3");
  if (n > slides.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3 - 1].style.display = "block";
  dots[slideIndex3 - 1].className += " active";
}

//image modals

var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");

var img6 = document.getElementById("myImg6");
var modalImg6 = document.getElementById("img06");
var captionText6 = document.getElementById("caption6");

var img7 = document.getElementById("myImg7");
var modalImg7 = document.getElementById("img07");
var captionText7 = document.getElementById("caption7");

img6.onclick = function() {
  modal6.style.display = "block";
  modalImg6.src = this.src;
  captionText6.innerHTML = this.alt;
};
img7.onclick = function() {
  modal7.style.display = "block";
  modalImg7.src = this.src;
  captionText7.innerHTML = this.alt;
};

modal6.onclick = function() {
  modal6.style.display = "none";
};

modal7.onclick = function() {
  modal7.style.display = "none";
};

//party mode

// var particlestoggle = document.getElementById("particles-js");
// var particlestoggler = document.getElementById("party-mode");

// particlestoggler.onclick = function() {
//   particlestoggle.style.display = "block";
// };

// function partyMode() {
//   particlestoggle.style.display = "block";
// }
