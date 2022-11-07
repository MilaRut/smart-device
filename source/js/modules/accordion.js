function initAccordion() {

  const accBtns = document.querySelectorAll('.accordion__btn');
  const accBodys = document.querySelectorAll('.accordion__body');

  accBodys.forEach((item) => item.classList.remove('no-js'));
  accBtns.forEach((item) => item.classList.remove('no-js'));

  accBtns.forEach((item) => {
    item.addEventListener('click', () => {

      let content = item.nextElementSibling;

      if (content.style.maxHeight && item.classList.contains('open')) {
        accBtns.forEach(function (el) {
          el.classList.remove('open');
        });
        accBodys.forEach(function (el) {
          el.style.maxHeight = null;
        });
      } else {
        accBtns.forEach(function (el) {
          el.classList.remove('open');
          item.classList.add('open');
        });
        accBodys.forEach(function (el) {
          el.style.maxHeight = null;
          content.style.maxHeight = content.scrollHeight + 'px';
        });
      }
    });
  });
}

export {initAccordion};
