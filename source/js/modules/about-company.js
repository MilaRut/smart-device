const toggleButton = document.querySelector('.about-company__button');
const hiddenItem = document.querySelector('.about-company__description--hidden');

function showDescription() {
  toggleButton.addEventListener('click', function () {
    hiddenItem.classList.toggle('about-company__description--hidden');
    if (!hiddenItem.classList.contains('about-company__description--hidden')) {
      toggleButton.textContent = 'Свернуть';
    } else {
      toggleButton.textContent = 'Подробнее';
    }
  });
}

export {showDescription};
