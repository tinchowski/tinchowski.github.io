var slideIndex_x = 1;
showDivs_x(slideIndex_x);

function plusDivs_x(n) {
  showDivs_x(slideIndex_x += n);
}

function showDivs_x(n) {
  var i;
  var x = document.getElementsByClassName("image_x");
  if (n > x.length) {slideIndex_x = 1}
  if (n < 1) {slideIndex_x = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex_x-1].style.display = "block";
}

var slideIndex_y = 1;
showDivs_y(slideIndex_y);

function plusDivs_y(n) {
  showDivs_y(slideIndex_y += n);
}

function showDivs_y(n) {
  var i;
  var x = document.getElementsByClassName("image_y");
  if (n > x.length) {slideIndex_y = 1}
  if (n < 1) {slideIndex_y = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex_y-1].style.display = "block";
}

var slideIndex_z = 1;
showDivs_z(slideIndex_z);

function plusDivs_z(n) {
  showDivs_z(slideIndex_z += n);
}

function showDivs_z(n) {
  var i;
  var x = document.getElementsByClassName("image_z");
  if (n > x.length) {slideIndex_z = 1}
  if (n < 1) {slideIndex_z = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex_z-1].style.display = "block";
}
