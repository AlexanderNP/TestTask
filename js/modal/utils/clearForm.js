function clearInputs() {
  const inputs = document.querySelectorAll('.form__input');
  inputs.forEach(item => {
    item.value = '';
  });
}

function clearTextArea() {
  const textArea = document.querySelector('.form__textarea');
  textArea.value = '';
}

function clearStatusMassege(){
  const inputs = document.querySelectorAll('.form__input');
  const statusMassage = document.querySelectorAll('.status-message');
  const submitButton = document.querySelector('.form__btn')

  inputs.forEach(item => {
    item.classList.remove('error')
  });

  statusMassage.forEach((item) => item.remove())

  submitButton.disabled = false
  submitButton.classList.remove('btn--disabled')
}


function clearForm() {
  clearInputs();
  clearTextArea();
}

function clearFormAterClose(){
  clearInputs();
  clearTextArea();
  clearStatusMassege();
}

export {clearForm, clearFormAterClose}