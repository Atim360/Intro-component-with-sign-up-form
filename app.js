"use strict"

const form = document.querySelector('.signUp__sectionForm')

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const formData = new FormData(form)
  formData.forEach((value, key) => {
    const parent = form.querySelector(`.signUp__sectionForm--input-text[name="${key}"]`).parentElement
    switch(key) {
      case "email":
        if (!isEmail(value)) {
          parent.querySelectorAll('.signUp__sectionFormValidationError')
            .forEach(elem => elem.classList.remove('signUp--display-none'))
        } else {
          parent.querySelectorAll('.signUp__sectionFormValidationError')
            .forEach(elem => elem.classList.add('signUp--display-none'))
        }
        break;
      default:
        if (!value.length) {
          parent.querySelectorAll('.signUp__sectionFormValidationError')
            .forEach(elem => elem.classList.remove('signUp--display-none'))
        } else {
          parent.querySelectorAll('.signUp__sectionFormValidationError')
            .forEach(elem => elem.classList.add('signUp--display-none'))
        }
        break;
    }
  })
})

function isEmail(value) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
  return String(value)
    .trim()
    .toLowerCase()
    .match(regex)
}