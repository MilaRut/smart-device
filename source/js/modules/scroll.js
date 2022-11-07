const introButton = document.querySelector('.intro__button');
const introButtonNojs = document.querySelector('.intro__button-link');
const feedback = document.getElementById('feedback');

introButton.classList.remove('no-js');
introButtonNojs.classList.remove('no-js');

function scrollToSection() {
  introButton.addEventListener('click', function (e) {
    e.preventDefault();
    feedback.scrollIntoView({behavior: 'smooth'});
  });
}


export {scrollToSection};
