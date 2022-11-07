const modalContainer = document.querySelector('[data-modal="feedback"]');
const username = modalContainer.querySelector('[name=username]');
const phone = modalContainer.querySelector('[name=phone]');
const modalForm = modalContainer.querySelector('#modal-form');

function resetForm() {
  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    username.value = '';
    phone.value = '';
  });
}

function validateForm() {
  if (username.value || phone.value) {
    modalForm.addEventListener('submit', function () {
      localStorage.setItem('username', username.value);
      localStorage.setItem('phone', phone.value);
      modalForm.submit();
      resetForm();
    });
  }
}

export {validateForm};
