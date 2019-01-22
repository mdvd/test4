;
  var greyColorToggle = document.querySelector('.order-section__color-toggle--grey');
  var blackColorToggle = document.querySelector('.order-section__color-toggle--black');
  var radioGrey = document.getElementById('orderColorGrey');
  var radioBlack = document.getElementById('orderColorBlack');
  var orderImageGrey = document.querySelector('.order-section__img-grey');
  var orderImageBlack = document.querySelector('.order-section__img-black');

  greyColorToggle.addEventListener ('click', function(event) {
    greyColorToggle.classList.add('order-section__color-toggle--active');
    orderImageGrey.classList.add('order-section__img-grey--show');
    orderImageBlack.classList.remove('order-section__img-black--show');
    blackColorToggle.classList.remove('order-section__color-toggle--active');
  });

  blackColorToggle.addEventListener ('click', function(event) {
    blackColorToggle.classList.add('order-section__color-toggle--active');
    orderImageBlack.classList.add('order-section__img-black--show');
    orderImageGrey.classList.remove('order-section__img-grey--show');
    greyColorToggle.classList.remove('order-section__color-toggle--active');
  });
  radioGrey.addEventListener ('click', function(event) {
    greyColorToggle.classList.add('order-section__color-toggle--active');
    orderImageGrey.classList.add('order-section__img-grey--show');
    orderImageBlack.classList.remove('order-section__img-black--show');
    blackColorToggle.classList.remove('order-section__color-toggle--active');
  });
  radioBlack.addEventListener ('click', function(event) {
    blackColorToggle.classList.add('order-section__color-toggle--active');
    orderImageBlack.classList.add('order-section__img-black--show');
    orderImageGrey.classList.remove('order-section__img-grey--show');
    greyColorToggle.classList.remove('order-section__color-toggle--active');
  });
