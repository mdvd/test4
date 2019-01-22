;
var galleryGrey = document.querySelector('.gallery-section__gallery--grey');
var slidesGrey = galleryGrey.querySelectorAll('.gallery__radio');
var galleryBlack = document.querySelector('.gallery-section__gallery--black');
var slidesBlack = galleryBlack.querySelectorAll('.gallery__radio');
var currentSlide = 0;

function goToSlide(slides, n){
  slides[currentSlide].className = 'gallery__radio';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].checked = true;
}

var nextGrey = galleryGrey.querySelector('.gallery__btn--right');
var previousGrey = galleryGrey.querySelector('.gallery__btn--left');
var nextBlack = galleryBlack.querySelector('.gallery__btn--right');
var previousBlack = galleryBlack.querySelector('.gallery__btn--left');

nextGrey.onclick = function(){
  goToSlide(slidesGrey, currentSlide+1);
};
previousGrey.onclick = function(){
  goToSlide(slidesGrey, currentSlide-1);
};
nextBlack.onclick = function(){
  goToSlide(slidesBlack, currentSlide+1);
};
previousBlack.onclick = function(){
  goToSlide(slidesBlack, currentSlide-1);
};

//Большая галерея, как модальное окно//

var modalGalleryGrey = document.querySelector('.modal-gallery--grey');
var modalGalleryGreyOpen = document.querySelectorAll('.gallery-section__gallery--grey .gallery__image-wrapper .gallery__image-item');
var modalGalleryBlack = document.querySelector('.modal-gallery--black');
var modalGalleryBlackOpen = document.querySelectorAll('.gallery-section__gallery--black .gallery__image-wrapper .gallery__image-item');
var overlay = document.querySelector('.modal-overlay');


for(i = 0; i < modalGalleryGreyOpen.length; i++) {
    modalGalleryGreyOpen[i].addEventListener("click", function(event) {
    modalGalleryGrey.classList.add("modal-gallery--show");
    overlay.classList.add("modal-overlay--show");
  });
};

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  modalGalleryGrey.classList.remove("modal-gallery--show");
  overlay.classList.remove("modal-overlay--show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modalGalleryGrey.classList.contains("modal-gallery--show")) {
      modalGalleryGrey.classList.remove("modal-gallery--show");
      overlay.classList.remove("modal-overlay--show");
    };
  };
});

for(i = 0; i < modalGalleryBlackOpen.length; i++) {
    modalGalleryBlackOpen[i].addEventListener("click", function(event) {
    modalGalleryBlack.classList.add("modal-gallery--show");
    overlay.classList.add("modal-overlay--show");
  });
};

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  modalGalleryBlack.classList.remove("modal-gallery--show");
  overlay.classList.remove("modal-overlay--show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modalGalleryBlack.classList.contains("modal-gallery--show")) {
      modalGalleryBlack.classList.remove("modal-gallery--show");
      overlay.classList.remove("modal-overlay--show");
    };
  };
});


var modalSlidesGrey = modalGalleryGrey.querySelectorAll('.gallery-full-screen__radio');
var modalSlidesBlack = modalGalleryBlack.querySelectorAll('.gallery-full-screen__radio');
var currentSlide = 0;

function goToSlide(slides, n){
  slides[currentSlide].className = 'gallery-full-screen__radio';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].checked = true;
}

var modalNextGrey = modalGalleryGrey.querySelector('.gallery-full-screen__btn--right');
var modalPreviousGrey = modalGalleryGrey.querySelector('.gallery-full-screen__btn--left');
var modalNextBlack = modalGalleryBlack.querySelector('.gallery-full-screen__btn--right');
var modalPreviousBlack = modalGalleryBlack.querySelector('.gallery-full-screen__btn--left');

modalNextGrey.onclick = function(){
  goToSlide(modalSlidesGrey, currentSlide+1);
};
modalPreviousGrey.onclick = function(){
  goToSlide(modalSlidesGrey, currentSlide-1);
};
modalNextBlack.onclick = function(){
  goToSlide(modalSlidesBlack, currentSlide+1);
};
modalPreviousBlack.onclick = function(){
  goToSlide(modalSlidesBlack, currentSlide-1);
};
