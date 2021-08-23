let offset = 0;
const sliderLine = document.querySelector('.ninth__slider-line');
const buttonNext = document.querySelector('.ninth__button-next');
const buttonPrev = document.querySelector('.ninth__button-prev');

buttonNext.addEventListener('click', () => {
  offset += 256;
  if (offset > 768) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
})

buttonPrev.addEventListener('click', () => {
  offset -= 256;
  if (offset < 0) {
    offset = 768;
  }
  sliderLine.style.left = -offset + 'px';
})
