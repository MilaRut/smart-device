const openModalBtn = document.querySelector('[data-modal="open-modal"]');
const modalContainer = document.querySelector('[data-modal="feedback"]');
const closeModalBtn = document.querySelector('[data-modal="close-modal"]');
const userName = document.getElementById('modal-input-name');
const body = document.getElementById('body');
const wrapper = document.getElementById('wrapper');

const INTERACTIVE_ELEMENTS = ['button', 'a', 'input', 'textarea', '[tabindex]'];
const interactiveElementsArr = wrapper.querySelectorAll(INTERACTIVE_ELEMENTS);

const toggleModal = () => modalContainer.classList.toggle('is-closed');

function openModal() {
  openModalBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    toggleModal();
    setTimeout(userName.focus(), 2000);
    body.classList.add('modal-opened');
    interactiveElementsArr.forEach((element) => {
      element.setAttribute('tabindex', '-1');
    });
  });
}

function prepareClosingModal() {
  toggleModal();
  body.classList.remove('modal-opened');
  interactiveElementsArr.forEach((element) => {
    element.setAttribute('tabindex', '1');
  });
}

function closeModal() {
  closeModalBtn.addEventListener('click', function () {
    prepareClosingModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      prepareClosingModal();
    }
  });

  document.addEventListener('click', function (e) {
    if (e.target === modalContainer) {
      prepareClosingModal();
    }
  });
}

export {openModal, closeModal};
