import { saveFormData } from "./dataForm.js";
const name = document.querySelector('.input__name')
const age = document.querySelector('.input__age')
const btn = document.querySelector('.btn')
btn.addEventListener('click', (e) => {
  e.preventDefault();
  saveFormData({name: name.value, age: age.value})
})