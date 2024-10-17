const questions = [
  {
    content: "Câu hỏi 1: Đông Lào là nước nào ?",
    answers: [
      "A.Việt Nam",
      "B.Lào",
      "C.Philipine",
      "D.Indonesia"
    ],
    correctAnswer: 0
  },
  {
    content: "Câu hỏi 2: Tây Lào là nước nào",
    answers: [
      "A.Miến Điện",
      "B.Ấn Độ",
      "C.Nepal",
      "D.Thái Lan"
    ],
    correctAnswer: 0
  },
  {
    content: "Câu hỏi 3: Nam Lào là nước nào",
    answers: [
      "A.Campuchia",
      "B.Malaysia",
      "C.Singapore",
      "D.Việt Nam"
    ],
    correctAnswer: 0
  },
  {
    content: "Câu hỏi 4: Bắc Lào là nước nào",
    answers: [
      "A.Trung Quốc",
      "B.Hàn Quốc",
      "C.Nhật Bản",
      "D.Hoa Kỳ"
    ],
    correctAnswer: 0
  },
  {
    content: "Câu hỏi 5: Lào có bao nhiêu tỉnh thành",
    answers: [
      "A.14",
      "B.15",
      "C.16",
      "D.17"
    ],
    correctAnswer: 1
  },
  {
    content: "Câu hỏi 6: Đâu là thủ đô của Lào",
    answers: [
      "A.Hà Nội",
      "B.Bangkok",
      "C.Vientiane",
      "D.Phnom Penh"
    ],
    correctAnswer: 0
  },
  {
    content: "Câu hỏi 7: Lào có biển không",
    answers: [
      "A.Có",
      "B.Không",
      "C.Có và không",
      "D.Không và có"
    ],
    correctAnswer: 1
  },
  {
    content: "Câu hỏi 8: Lào có sân bay quốc tế không",
    answers: [
      "A.Có",
      "B.Không",
      "C.Có và không",
      "D.Không và có"
    ],
    correctAnswer: 0
  },
  {
    content: "Câu hỏi 9: Lào có biên giới với Việt Nam không",
    answers: [
      "A.Có",
      "B.Không",
      "C.Có và không",
      "D.Không và có"
    ],
    correctAnswer: 0
  },
  {
    content: "Câu hỏi 10: Thủ đô của Brueni là gì",
    answers: [
      "A.Bangkok",
      "B.Bandar Seri Begawan",
      "C.Vientiane",
      "D.Phnom Penh"
    ],
    correctAnswer: 1
  }
]

const playWrapperNode = document.querySelector('.play-wrapper')
const resultWrapperNode = document.querySelector('.result-wrapper')
const audioNode = document.querySelector('.audio')
const scoreNode = document.querySelector('.score span')
const questionNode = document.querySelector('.question')
const answersNode = document.querySelector('.answers')
const layerNode = document.querySelector('.layer')

let currentQuestion = 0
let currentScore = 0
let resultQsArr = []

const renderQuestion = (questionNum) => {

  if (questionNum === questions.length) {
    playWrapperNode.style.display = 'none'
    resultWrapperNode.style.display = 'block'

    const gridResultQs = document.querySelector('.grid-result-qs')
    const resultScoreNode = document.querySelector('.result-score span')

    resultQsArr.forEach((result, index) => {
      gridResultQs.innerHTML += `<div class="${!result ? 'wrong' : ''}">${index + 1}</div>`
    })
    gridResultQs.nextElementSibling.innerText = `${resultQsArr.filter(Boolean).length} / 10`
    resultScoreNode.innerText = currentScore
    return
  }

  layerNode.innerText = ''
  audioNode.innerHTML = ''
  answersNode.innerHTML = ''
  scoreNode.innerText = currentScore
  questionNode.innerText = questions[questionNum].content
  questions[questionNum].answers.forEach((answer, index) => {
    answersNode.innerHTML += `<div class="answer" onclick="checkAnswer(${index})">${answer}</div>`
  })
}
renderQuestion(currentQuestion)

const checkAnswer = (index) => {
  const answerItemNode = answersNode.children[index]

  layerNode.style.display = 'flex'
  answerItemNode.classList.add('is-active')

  let timeCheck = setTimeout(() => {
    if (index === questions[currentQuestion].correctAnswer) {
      currentScore += 10
      resultQsArr.push(true)
      audioNode.innerHTML = '<audio src="assets/correct.mp3" autoplay></audio>'
      layerNode.style.color = 'green'
      layerNode.innerText = 'Đúng rùi'
      console.log('Chính xác')
    } else {
      currentScore += 0
      resultQsArr.push(false)
      audioNode.innerHTML = '<audio src="assets/shocked.mp3" autoplay></audio>'
      layerNode.style.color = 'red'
      layerNode.innerText = 'Sai rùi'
      console.log('Chưa chính xác')
    }
  }, 800)

  let timeResult = setTimeout(() => {
    answersNode.children[questions[currentQuestion].correctAnswer].classList.add('is-correct')
  }, 1200)

  let timeNextQs = setTimeout(() => {
    layerNode.style.display = 'none'
    ++currentQuestion
    renderQuestion(currentQuestion)
  }, 2000)

}