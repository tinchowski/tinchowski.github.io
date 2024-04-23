// Primera función para elementos con la clase "image_x"
let index_x = 0;
displayImages_x();

function displayImages_x() {
  let i;
  const images_x = document.getElementsByClassName("image_x");
  for (i = 0; i < images_x.length; i++) {
    images_x[i].style.display = "none";
  }
  index_x++;
  if (index_x > images_x.length) {
    index_x = 1;
  }
  images_x[index_x-1].style.display = "block";
  setTimeout(displayImages_x, 4000); 
}

// Segunda función para elementos con la clase "image_y"
let index_y = 0;
displayImages_y();

function displayImages_y() {
  let i;
  const images_y = document.getElementsByClassName("image_y");
  for (i = 0; i < images_y.length; i++) {
    images_y[i].style.display = "none";
  }
  index_y++;
  if (index_y > images_y.length) {
    index_y = 1;
  }
  images_y[index_y-1].style.display = "block";
  setTimeout(displayImages_y, 4000); 
}

// Segunda función para elementos con la clase "image_z"
let index_z = 0;
displayImages_z();

function displayImages_z() {
  let i;
  const images_z = document.getElementsByClassName("image_z");
  for (i = 0; i < images_z.length; i++) {
    images_z[i].style.display = "none";
  }
  index_z++;
  if (index_z > images_z.length) {
    index_z = 1;
  }
  images_z[index_z-1].style.display = "block";
  setTimeout(displayImages_z, 4000); 
}




// control de cantidad de invitados
cant_personas.oninput = function () {
  if (this.value.length > 2) {
      this.value = this.value.slice(0,2);
      alert('El máximo de personas es 10.')
  }
}

