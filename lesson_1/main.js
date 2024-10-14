//Vũ Văn Nhị

// Câu 1:
let numC1 = 28;
console.log('CÂU 1:\n' + laSoNguyenTo(numC1) + '\n' + laSoHoanHoa(numC1) + '\n');

function laSoHoanHoa(num) {
  let sum = 0
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i
    }
  }
  return sum === num ? `Số ${num} là số hoàn hảo` : `Số ${num} không phải là số hoàn hảo`
}

function laSoNguyenTo(num) {
  if (num < 2) {
    return `Số ${num} không phải là số nguyên tố`
  }
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return `Số ${num} không phải là số nguyên tố`
    }
  }
  return `Số ${num} là số nguyên tố`
}

// Câu 2:
const arr = [10, 2, 3, 2, 5]
const tangDan = arr.sort((n1, n2) => n1 - n2)
const giamDan = arr.sort((n1, n2) => n2 - n1)
console.log(`Câu 2:
  - Tăng dần: ${tangDan}
  - Giảm dần: ${giamDan}
  `)

// Câu 3:
let rawStr = "Hello CY VietNam"
let rawStrReverse = rawStr.split('').reverse().join("")
console.log("CÂU 3:\n" + rawStrReverse + "\n")

// Câu 4:
let emailC4 = "nhi123@id.vn"

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

console.log("CÂU 4:\n" + kiemtraEmail(emailC4) + '\n')

function kiemtraEmail(email) {
  let mess = ''
  emailRegex.test(email) ? mess = `${email} là 1 email hợp lệ` : mess = `${email} là 1 email không hợp lệ`
  return mess

  // const index = email.indexOf('@')
  // if (index > 0 && index < email.length) {
  //   return `${email} là 1 email hợp lệ`
  // }
  // return `${email} là 1 email không hợp lệ`
}

// Câu 5
let strC5 = ' Một chuỗi! @#bất  kỳ   '
let option1a = ''
let option2a = 'Xin chào  Cy'
let option3a = 'Xin chào @Cyer'
let option4a = 'Xin c{h}ào #Tech@!Cy(VN)  '


console.log(strC5)
console.log(xuLyChuoi(strC5))
console.log(`CÂU 5:
  - Chuỗi ban đầu: ${strC5}
  - Chuỗi sau khi xử lý: ${xuLyChuoi(strC5)}
  `)

function xuLyChuoi(text) {
  let cloneText = text.split(' ').filter(item => item !== '').join(' ')

  let kyTuDB = ['@', '#', '!', '{', '}', '[', ']', '(', ')']
  kyTuDB.forEach(item => {
    if (cloneText.includes(item)) cloneText = cloneText.replaceAll(item, '')
  })
  return cloneText
}

function xuLyPhanA(text) {
  if (text === '') return []
  let textToArr = text.split(' ')
  let result = textToArr.map(item => item.replace(item[0], item[0].toUpperCase()))
  return result.reverse()
}

function xuLyPhanB(text) {
  if (text === '') return 0
  let textToArr = text.split(' ')

  let sum = 0;

  let result = textToArr.filter(item => +item)

  for (i of result) {
    sum = sum + +i
  }

  return Math.round(sum / result.length)
}

console.log(xuLyPhanA(xuLyChuoi(option2a)))

let option2b = 'Xin chào 123456 @CY'
let option4b = 'Xin 20 chào 60 30@CY 100'

console.log(xuLyPhanB(xuLyChuoi(option4b)))

// Câu 6:
let arrC6 = [
  {
    brand: 'Huyndai',
    model: 'Santafe'
  },
  {
    brand: 'Huyndai',
    model: 'Sonata'
  },
  {
    brand: 'Vinfast',
    model: 'Lux SA'
  },
  {
    brand: 'Toyota',
    model: 'Camry'
  },
  {
    brand: 'Vinfast',
    model: 'Lux A'
  },
  {
    brand: 'Toyota',
    model: 'Vios'
  },
]

// CÁCH 1
// let resultC6 = arrC6.reduce((acc, item) => {

//   if (item.brand === 'Huyndai') {
//     acc[0].push(item)
//   } else if (item.brand === 'Vinfast') {
//     acc[1].push(item)
//   } else if (item.brand === 'Toyota') {
//     acc[2].push(item)
//   }
//   return acc
// }, [[], [], []])

const nameBrand = Array.from(new Set(arrC6.map(item => item.brand)))

// CÁCH 2
// let resultC6 = arrC6.reduce((acc, item) => {
//   nameBrand.forEach((name, index) => {
//     if (item.brand === name) acc[index].push(item)
//   })
//   return acc
// }, Array.from({ length: nameBrand.length }, () => []))

// CÁCH 3
let resultC6 = arrC6.reduce((acc, item) => {
  const index = nameBrand.indexOf(item.brand)
  if(index !== -1) acc[index].push(item)
  return acc
}, Array.from({ length: nameBrand.length }, () => []))

console.log(resultC6)