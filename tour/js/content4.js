



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
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
window.onload=function(){
    var bannerLeft=document.getElementById("bannerLeft");
    var bannerRight=document.getElementById("bannerRight");
    var contentLeft=document.getElementById("contentLeft");
    var contentRight=document.getElementById("contentRight");
    // bannerLeft.style.borderBottom="2px solid red";
}
function enterLeft(){
    bannerLeft.style.borderBottom="2px solid red";
    bannerLeft.style.backgroundColor="#fff";
    bannerRight.style.borderBottom="1px solid #D9D9D9";
    bannerRight.style.backgroundColor="#E5E5E5";
    contentLeft.style.display="flex";
    contentRight.style.display="none";

    // bannerRight
}
function enterRight(){
    bannerRight.style.borderBottom="2px solid red";
    bannerRight.style.backgroundColor="#fff";
    bannerLeft.style.borderBottom="1px solid #D9D9D9";
    bannerLeft.style.backgroundColor="#E5E5E5";
    contentLeft.style.display="none";
    contentRight.style.display="flex";
    // bannerRight
}


