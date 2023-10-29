let slideIndex = 0;
// showSlides(slideIndex);

function add_slides() {
  // Add DIVs
  const container = document.getElementById("slideshow-container");

  for (var i = 0; i < images.length; i++) {
    const slide = document.createElement("div");
    slide.classList.add("mySlides");

    const numbertext = document.createElement("div");
    numbertext.classList.add("numbertext");

    const slide_img = document.createElement("img");
    slide_img.src = dir + "/" + images[i];

    const caption = document.createElement("div");
    caption.classList.add("text");

    container.appendChild(slide);
    slide.appendChild(numbertext);
    slide.appendChild(slide_img);
    slide.appendChild(caption);
  }
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n == slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "flex";
}

function slideShow() {
  add_slides();
  showSlides(0);
}
