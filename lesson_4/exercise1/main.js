const num1 = document.querySelector('.num-1')
const num2 = document.querySelector('.num-2')
const resultNode = document.querySelector('#result')

const getResult = (type) => {
  let result = 0
  if (num1.value === '' || num2.value === '') {
    resultNode.innerText = ': Vui lòng nhập số'
    return
  }
  console.log(num1)
  let num1Value = Number(num1.value)
  let num2Value = Number(num2.value)
  switch (type) {
    case 'plus': result = num1Value + num2Value
      break
    case 'sub': result = num1Value - num2Value
      break
    case 'multiple': result = num1Value * num2Value
      break
    case 'divide': result = Math.round((num1Value / num2Value) * 100) / 100
      break
    default: result = 0
      break
  }
  resultNode.innerText = result
}