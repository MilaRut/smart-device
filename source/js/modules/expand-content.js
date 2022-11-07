const toggleButton = document.querySelector('.about-company__button');
const hiddenItem = document.querySelector('.about-company__wrapper');

toggleButton.classList.remove('no-js');
hiddenItem.classList.remove('no-js');

function expandContent() {
  hiddenItem.classList.add('is-hidden');
  toggleButton.addEventListener('click', function () {
    hiddenItem.classList.toggle('is-hidden');
    if (!hiddenItem.classList.contains('is-hidden')) {
      toggleButton.textContent = 'Свернуть';
    } else {
      toggleButton.textContent = 'Подробнее';
    }
  });
}

export {expandContent};
