const displayNode = document.querySelector('.display > input')

let memoryNum1 = ''
let memoryOperation = ''

const handleKeyBoardNum = (ele) => {
  console.log(displayNode)
  console.log('ele', ele.innerText)
  displayNode.value += ele.innerText
}

const handleReset = () => {
  displayNode.value = ''
  memoryNum1 = ''
  memoryOperation = ''
}

const hanldeOperation = (ele) => {
  if (memoryOperation !== '') {
    alert('Vui lòng nhập số')
    return
  }
  memoryNum1 = displayNode.value
  if (memoryNum1.trim() === '') {
    alert('Vui lòng nhập số thứ nhất')
    return
  }
  // ele.style.background = '#dff9fb'
  memoryOperation = ele.innerText
  displayNode.value = ''
}

const getResult = () => {
  let result = 0

  let memoryNum2 = displayNode.value

  if (memoryNum2.trim() === '') {
    alert('Vui lòng nhập số số thứ hai')
    return
  }

  let num1Value = Number(memoryNum1)
  let num2Value = Number(memoryNum2)

  console.log(num1Value)
  console.log(num2Value)

  switch (memoryOperation) {
    case '+': result = num1Value + num2Value
      break
    case '-': result = num1Value - num2Value
      break
    case '*': result = num1Value * num2Value
      break
    case '/': result = Math.round((num1Value / num2Value) * 100) / 100
      break
    default: result = 0
      break
  }
  memoryNum1 = ''
  memoryOperation = ''
  displayNode.value = result
}