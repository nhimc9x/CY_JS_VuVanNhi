const questions = [
  {
    content: 'Sông nào chảy qua Hà Nội',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/MatnuocSongHong-06112008333.JPG',
    correctAnswer: 'Sông Hồng',
    maxShowingCharacter: 2
  },
  {
    content: 'Ai là người phát minh ra bóng đèn sợi đốt',
    image: 'https://st.quantrimang.com/photos/image/2016/10/25/thomsa-edison-4.jpg',
    correctAnswer: 'Edison',
    maxShowingCharacter: 3
  },
  {
    content: 'Nguời giàu nhất thế giới ',
    image: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455',
    correctAnswer: 'Jezz Bezos',
    maxShowingCharacter: 2
  },
  {
    content: 'Thủ đô của Belarus',
    image: 'https://content.r9cdn.net/rimg/dimg/b6/c4/2a4d0e8a-city-9524-166a64199e6.jpg?width=1366&height=768&xhint=1361&yhint=1023&crop=true',
    correctAnswer: 'Minsk',
    maxShowingCharacter: 3
  }
]

const quantitySuggestNode = document.querySelector('.suggest span')
const questionNode = document.querySelector('.question p')
const questionImgNode = document.getElementById('qs-img')
const answerNode = document.querySelector('.answer')
const userAnswerNode = document.querySelector('.user-answer input')
const gameOverNode = document.querySelector('.game-over')


let currentQuestion = 0

let currentCorrectAnswerArr = []

let currentMaxShowingCharacter = 0

const renderQuestion = (questionNum) => {

  questionNode.innerText = questions[questionNum].content
  questionImgNode.src = questions[questionNum].image

  currentMaxShowingCharacter = questions[questionNum].maxShowingCharacter

  quantitySuggestNode.innerText = currentMaxShowingCharacter

  const correctAnswerArr = questions[questionNum].correctAnswer.toLowerCase().split('').filter(item => item !== ' ')

  currentCorrectAnswerArr = [...correctAnswerArr]

  answerNode.innerHTML = ''
  userAnswerNode.value = ''
  correctAnswerArr.forEach((item, index) => {
    answerNode.innerHTML += `<div onclick="handleSugget(${index})"></div>`
  })

  console.log(correctAnswerArr)

}
renderQuestion(currentQuestion)

const handleSugget = (index) => {
  if (currentMaxShowingCharacter === 0) return
  --currentMaxShowingCharacter
  quantitySuggestNode.innerText = currentMaxShowingCharacter
  answerNode.children[index].innerText = currentCorrectAnswerArr.at(index)
}

const handleCheck = () => {
  const userAnswer = userAnswerNode.value
  if (userAnswer.trim() === '') return

  const userAnswerArr = [...userAnswer.toLowerCase()].filter(item => item !== ' ')

  if (userAnswerArr.length == currentCorrectAnswerArr.length && userAnswerArr.every((item, index) => item === currentCorrectAnswerArr[index])) {
    currentQuestion++
    renderQuestion(currentQuestion)
    return
  }

  currentCorrectAnswerArr.forEach((item, index) => {
    answerNode.children[index].innerText = item
  })

  setTimeout(() => {
    alert('Bạn đã sai rùi')
    gameOverNode.style.display = 'block'
  }, 1200)

}