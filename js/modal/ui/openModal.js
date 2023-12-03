import { clearFormAterClose } from "../utils/clearForm.js"

export function openModal() {
  const btnOpen = document.querySelector('.footer__btn')

  const modal = document.querySelector('.modal')

  const body = document.body

  const modalOpen = () => {
    modal.classList.add('modal--show')
    body.classList.add('body--modal')
  }

  const modalClose = () => {
    modal.classList.remove('modal--show')
    body.classList.remove('body--modal')
    clearFormAterClose()
  }

  btnOpen.addEventListener('click', () => modalOpen())

  modal.addEventListener('click', (event) => {
    let target = event.target
    if (target && target.classList.contains('modal-container') || target.classList.contains('modal-btn-close-img')) {
      modalClose()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.code === "Escape") {
      modalClose()
    }
  })
}
