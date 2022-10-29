const introButton = document.querySelector('.intro__button');
const feedback = document.getElementById('feedback');

function scrollToSection() {
  introButton.onclick = () => {
    feedback.scrollIntoView({behavior: 'smooth'});
  };
}

export {scrollToSection};
