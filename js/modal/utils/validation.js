let statusMessages = {};

function createErrorMessage(message) {
  const errorDiv = document.createElement('div');
  errorDiv.textContent = message;
  errorDiv.classList.add('status-message');
  return errorDiv;
}

function removeErrorMessage(inputField) {
  if (statusMessages[inputField.id]) {
    statusMessages[inputField.id].remove();
    delete statusMessages[inputField.id];
  }
}

function validateName() {
  const fullNameInput = document.getElementById('fullName');
  removeErrorMessage(fullNameInput);
  if (fullNameInput.value.trim() === '') {
    statusMessages[fullNameInput.id] = createErrorMessage('Поле не может быть пустым');
    fullNameInput.classList.add('error');
    fullNameInput.parentElement.appendChild(statusMessages[fullNameInput.id]);
    return false;
  } else {
    fullNameInput.classList.remove('error');
    return true;
  }
}

function validateEmail() {
  const emailInput = document.getElementById('email');
  removeErrorMessage(emailInput);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    statusMessages[emailInput.id] = createErrorMessage('Некорректный email');
    emailInput.classList.add('error');
    emailInput.parentElement.appendChild(statusMessages[emailInput.id]);
    return false;
  } else {
    emailInput.classList.remove('error');
    return true;
  }
}

function btnDisabled() {
  const isValidName = validateName()
  const isValidEmail = validateEmail()
  const submitButton = document.querySelector('.form__btn')
  if (isValidName && isValidEmail) {
    submitButton.classList.remove('btn--disabled');
    submitButton.disabled = false;
  } else {
    submitButton.classList.add('btn--disabled');
    submitButton.disabled = true;
  }
}


function validateForm() {
  btnDisabled();
  validateName();
  validateEmail();
}

export {validateForm, validateName, validateEmail}

