function initAccordion() {

  const accBtns = document.querySelectorAll('.accordion__btn');
  const accBodys = document.querySelectorAll('.accordion__body');
  const listItems = document.querySelectorAll('.accordion__item');

  accBodys.forEach((item) => item.classList.remove('no-js'));
  accBtns.forEach((item) => item.classList.remove('no-js'));

  function setTabindex() {
    listItems.forEach((listItem) => listItem.setAttribute('tabindex', '-1'));
  }

  function removeTabindex() {
    listItems.forEach((listItem) => listItem.removeAttribute('tabindex'));
  }

  if (screen.width < 768) {
    setTabindex();
  } else {
    removeTabindex();
  }

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
        setTabindex();
      } else {
        accBtns.forEach(function (el) {
          el.classList.remove('open');
          item.classList.add('open');
        });
        accBodys.forEach(function (el) {
          el.style.maxHeight = null;
          content.style.maxHeight = content.scrollHeight + 'px';
        });
        removeTabindex();
      }
    });
  });
}

export {initAccordion};
