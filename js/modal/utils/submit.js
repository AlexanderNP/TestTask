import { validateForm, validateName, validateEmail } from "./validation.js";
import { postData } from "./api.js";
import { clearForm } from "./clearForm.js";
export function submitForm() {
  const form = document.querySelector('.modal-form');

  const fullNameInput = document.getElementById('fullName');

  const emailInput = document.getElementById('email');

  const popUp = document.querySelector('.popUp');

  fullNameInput.addEventListener('blur', validateForm);

  emailInput.addEventListener('blur', validateForm);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateForm()

    const isValidName = validateName();
    const isValidEmail = validateEmail();

    if (isValidName && isValidEmail) {
      const formData = new FormData(form)
      postData(formData)
        .then(() => {
          clearForm()
        })
        .then(() => {

          popUp.classList.add('popUp--show')

          setTimeout(() => {
            popUp.classList.remove('popUp--show')
          }, 2000)
        })
    }
  });
}
