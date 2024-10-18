const str = "Thủ đô của Việt Nam là {{Hà Nội}}. Thủ đô của Nhật Bản là {{Tokyo}}. Thủ đô của Hàn Quốc là {{Seoul}}. Thủ đô của Trung Quốc là {{Bắc Kinh}}. Thủ đô của Indonesia là {{Jakarta}}. Thủ đô của Philippines là {{Manila}}. Thủ đô của Singapore là {{Singapore}}. Thủ đô của Malaysia là {{Kuala Lumpur}}. Thủ đô của Campuchia là {{Phnom Penh}}. Thủ đô của Lào là {{Vientiane}}. Thủ đô của Myanmar là {{Naypyidaw}}. Thủ đô của Thái Lan là {{Bangkok}}. Thủ đô của Ấn Độ là {{New Delhi}}. Thủ đô của Nepal là {{Kathmandu}}. Thủ đô của Bhutan là {{Thimphu}}. Thủ đô của Bangladesh là {{Dhaka}}. Thủ đô của Sri Lanka là {{Colombo}}. Thủ đô của Pakistan là {{Islamabad}}. Thủ đô của Afghanistan là {{Kabul}}. Thủ đô của Iran là {{Tehran}}. Thủ đô của Iraq là {{Baghdad}}. Thủ đô của Ả Rập Xê Út là {{Riyadh}}. Thủ đô của Qatar là {{Doha}}. Thủ đô của Kuwait là {{Kuwait City}}"

function handleStr(inputString) {
  const regex = /(.*?)\{\{(.*?)\}\}./g

  const matches = [...inputString.matchAll(regex)]
  return matches.map(item => {
    return {
      question: item[1],
      answer: item[2]
    }
  })
}

const questions = handleStr(str)
console.log(questions)

const contentNode = document.querySelector('.content')

const render = () => {

  const htmlStr = questions.reduce((acc, item, index) => {
    return acc + `<div class="row">
        <p>${item.question}</p>
        <input type="text">
        <span>${index + 1}</span>
      </div>`
  }, '')
  contentNode.innerHTML = htmlStr

}
render()

const handleCheck = () => {
  const inputsNode = document.querySelectorAll('input')

  questions.forEach((item, index) => {
    if (item.answer.toLowerCase() === inputsNode[index].value.toLowerCase()) {
      inputsNode[index].nextElementSibling.style.backgroundColor = '#04AA6D'
      inputsNode[index].style.borderColor = '#04AA6D'
    } else {
      inputsNode[index].nextElementSibling.style.backgroundColor = '#e74c3c'
      inputsNode[index].style.borderColor = '#e74c3c'
    }
  })
}

const handleReset = () => {
  const inputsNode = document.querySelectorAll('input')
  inputsNode.forEach(item => {
    item.value = ''
    item.style.borderColor = 'blue'
    item.nextElementSibling.style.backgroundColor = 'blue'
  })
}