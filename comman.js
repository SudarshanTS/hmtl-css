 var menuBar = document.getElementById('menubar');
 var slides = document.getElementsByClassName("mySlides");
 var slideIndex = 1;
 var myIndex = 0;
 showSlides(slideIndex);
 carousel()

 function show() {
   menuBar.style.display === "none" ? menuBar.style.display = "block" : menuBar.style.display = "none";
 }

 function hide() {
   show();
 }

 function callproject(value) {
   if (value == 1) {
     localStorage.setItem("project", "PROJECT 1");

   } else if (value == 2) {
     localStorage.setItem("project", "PROJECT 2");

   } else if (value == 3) {
     localStorage.setItem("project", "PROJECT 3");
   } else if (value == 4) {
     localStorage.setItem("project", "PROJECT 4");
   }

 }

 function getproject() {
   document.getElementById("projectText").innerHTML = localStorage.getItem("project");
 }

 function plusSlides(n) {
   showSlides(slideIndex += n);
 }

 function showSlides(n) {
   var i;
   if (n > slides.length) {
     slideIndex = 1
   }
   if (n < 1) {
     slideIndex = slides.length
   }
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   slides[slideIndex - 1].style.display = "block";

 }

 function carousel() {
   var i;
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   myIndex++;
   if (myIndex > slides.length) {
     myIndex = 1
   }
   slides[myIndex - 1].style.display = "block";
   setTimeout(carousel, 4000);
 }
