const firstInput = document.querySelector('#first')
const secondInput = document.querySelector('#second')
const button = document.querySelector('#getResult')
const result = document.querySelector('#result')

let firstValue = '', secondValue = ''

firstInput.addEventListener('change', (e) => {
    firstValue =  e.target.value
})

secondInput.addEventListener('change', (e) => {
    secondValue = e.target.value
})

button.addEventListener('click', () => {
  result.innerHTML = Number(firstValue) + Number(secondValue)
})