const questions = [
  { question: 'Thủ đô của Việt Nam là?', answer: 'Hà Nội' },
  { question: 'Thủ đô của Nhật Bản là?', answer: 'Tokyo' },
  { question: 'Thủ đô của Hàn Quốc là?', answer: 'Seoul' },
  { question: 'Thủ đô của Trung Quốc là?', answer: 'Bắc Kinh' },
  { question: 'Thủ đô của Indonesia là?', answer: 'Jakarta' },
  { question: 'Thủ đô của Philippines là?', answer: 'Manila' },
  { question: 'Thủ đô của Singapore là?', answer: 'Singapore' },
  { question: 'Thủ đô của Malaysia là?', answer: 'Kuala Lumpur' },
  { question: 'Thủ đô của Campuchia là?', answer: 'Phnom Penh' },
  { question: 'Thủ đô của Lào là?', answer: 'Vientiane' },
  { question: 'Thủ đô của Myanmar là?', answer: 'Naypyidaw' },
  { question: 'Thủ đô của Thái Lan là?', answer: 'Bangkok' },
  { question: 'Thủ đô của Ấn Độ là?', answer: 'New Delhi' },
  { question: 'Thủ đô của Nepal là?', answer: 'Kathmandu' },
  { question: 'Thủ đô của Bhutan là?', answer: 'Thimphu' },
  { question: 'Thủ đô của Bangladesh là?', answer: 'Dhaka' },
  { question: 'Thủ đô của Sri Lanka là?', answer: 'Colombo' },
  { question: 'Thủ đô của Pakistan là?', answer: 'Islamabad' },
  { question: 'Thủ đô của Afghanistan là?', answer: 'Kabul' },
  { question: 'Thủ đô của Iran là?', answer: 'Tehran' },
  { question: 'Thủ đô của Iraq là?', answer: 'Baghdad' },
  { question: 'Thủ đô của Ả Rập Xê Út là?', answer: 'Riyadh' },
  { question: 'Thủ đô của Qatar là?', answer: 'Doha' },
  { question: 'Thủ đô của Kuwait là?', answer: 'Kuwait City' }
]

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