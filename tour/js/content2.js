

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


    function wdsly(){
    // document.getElementById("waterImg1").style.opacity=0.7;
     document.getElementById("waterImg1").style.opacity=0.7; 
     document.getElementById("waterImg2").style.opacity=1; 
      document.getElementById("waterImg3").style.opacity=1; 
    document.getElementById("wdsly").style.display="flex";  
    document.getElementById("aqw").style.display="none";
    document.getElementById("ygha").style.display="none";   
}
function aqw(){
     document.getElementById("waterImg1").style.opacity=1; 
     document.getElementById("waterImg2").style.opacity=0.7; 
      document.getElementById("waterImg3").style.opacity=1;
    document.getElementById("wdsly").style.display="none";
    document.getElementById("aqw").style.display="flex";
    document.getElementById("ygha").style.display="none";   
}
function ygha(){
    document.getElementById("waterImg1").style.opacity=1; 
     document.getElementById("waterImg2").style.opacity=1; 
      document.getElementById("waterImg3").style.opacity=0.7;
    document.getElementById("wdsly").style.display="none";
    document.getElementById("aqw").style.display="none";
    document.getElementById("ygha").style.display="flex";   
}
    wdsly();

function ScrollImgLeft(){ 
var speed=20; 
var scroll_begin = document.getElementById("scroll_begin"); 
var scroll_end = document.getElementById("scroll_end"); 
var scroll_div = document.getElementById("scroll_div"); 
scroll_end.innerHTML=scroll_begin.innerHTML; 
function Marquee(){ 
if(scroll_end.offsetWidth-scroll_div.scrollLeft<=0) 
scroll_div.scrollLeft-=scroll_begin.offsetWidth; 
else 
scroll_div.scrollLeft++; 
} 
var MyMar=setInterval(Marquee,speed); 
scroll_div.onmouseover=function() {clearInterval(MyMar);} 
scroll_div.onmouseout=function() {MyMar=setInterval(Marquee,speed);} 
} 

function ScrollImgLeft(){ 
    var speed=20; 
    var scroll_begin = document.getElementById("scroll_begin"); 
    var scroll_end = document.getElementById("scroll_end"); 
    var scroll_div = document.getElementById("scroll_div"); 

    scroll_end.innerHTML=scroll_begin.innerHTML; 
    function Marquee(){ 
    if(scroll_end.offsetWidth-scroll_div.scrollLeft<=0) 
    scroll_div.scrollLeft-=scroll_begin.offsetWidth; 
    else 
    scroll_div.scrollLeft++; 
    } 
    var MyMar; 
    scroll_div.onmouseover=function() {MyMar=setInterval(Marquee,speed);}
    scroll_div.onmouseout=function()  {clearInterval(MyMar);} 
} 

function ScrollImgLeftTwo(){ 
    var speed=20; 
    var scroll_begin = document.getElementById("beginTwo"); 
    var scroll_end = document.getElementById("endTwo"); 
    var scroll_div = document.getElementById("divTwo"); 

    scroll_end.innerHTML=scroll_begin.innerHTML; 
    function Marquee(){ 
    if(scroll_end.offsetWidth-scroll_div.scrollLeft<=0) 
    scroll_div.scrollLeft-=scroll_begin.offsetWidth; 
    else 
    scroll_div.scrollLeft++; 
    } 
    var MyMar; 
    scroll_div.onmouseover=function() { MyMar=setInterval(Marquee,speed);} 
    scroll_div.onmouseout=function() {clearInterval(MyMar);} 
} 

function ScrollImgLeftThree(){ 
    var speed=20; 
    var scroll_begin = document.getElementById("beginThree"); 
    var scroll_end = document.getElementById("endThree"); 
    var scroll_div = document.getElementById("divThree"); 

    scroll_end.innerHTML=scroll_begin.innerHTML; 
    function Marquee(){ 
    if(scroll_end.offsetWidth-scroll_div.scrollLeft<=0) 
    scroll_div.scrollLeft-=scroll_begin.offsetWidth; 
    else 
    scroll_div.scrollLeft++; 
    } 
    var MyMar; 
    scroll_div.onmouseover=function(){MyMar=setInterval(Marquee,speed);} 
    scroll_div.onmouseout=function()  {clearInterval(MyMar);} 
} 





