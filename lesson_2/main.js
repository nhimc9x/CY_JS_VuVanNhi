// Câu 7 
const nestedArray = [1, [2, [3, [4, 5, 6, 7, 8, 9]]]]
console.log(nestedArray.flat(Infinity))

// Câu 8
let users = {
  name: "John",
  age: 30,
  hobbies: ["coding", "playing"],
}

// const copyUsers = (data) => {
//   return { ...data }
// }

const copyUsers = (data) => {
  const arrKeys = Object.keys(data)
  let cloned = {}
  arrKeys.forEach((key) => {
    cloned[key] = data[key]
  })
  return cloned
}

console.log(copyUsers(users))

// Câu 9
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 10, 11]
]

const changeMatrix = (matrix) => {

  return matrix.flat(Infinity).reduce((acc, item, index) => {
    if (index % 3 === 0) acc[0].unshift(item)
    else if (index % 3 === 1) acc[1].unshift(item)
    else if (index % 3 === 2) acc[2].unshift(item)
    return acc
  }, [[], [], []])

}

console.log(changeMatrix(matrix))
// [
//   [9,4,1],
//   [10,5,2],
//   [11,6,3]
// ]

// Câu 10
let decription = "Tập đoàn Hyosung (Hàn Quốc) dự kiến đầu tư thêm 4 tỷ USD, nâng tổng số vốn rót vào Việt Nam lên gấp đôi. Tại cuộc gặp Thủ tướng Phạm Minh Chính chiều 14/10, ông Cho Hyun-joon, Chủ tịch Tập đoàn Hyosung (Hàn Quốc), khẳng định môi trường đầu tư của Việt Nam rất đáng tin cậy. Ông tin rằng Việt Nam sẽ trở thành trung tâm sản xuất của châu Á."

const countWords = (text) => {
  const arrOrinaal = text.replace(/[@#!\,\.\{\}\[\]\(\)]/g, '').split(" ")

  const arrCountWord = arrOrinaal.map(word => word.length)

  const cloneArr = [...arrCountWord].sort((a, b) => b - a)

  // const result = cloneArr[0]

  // console.log(arrCountWord.indexOf(result))

  // console.log(arrOrinaal.at(36))

  // console.log(result)

  return arrOrinaal.at(arrCountWord.indexOf(cloneArr[0]))
}

console.log(countWords(decription))

// Câu 11
let n = 10
let array10 = ['arr', 'arr', 'arr', 'arr', 'br']

let n1 = -2
let array11 = ['arr', 'arr', 'arr', 'arr', 'br']

const counter = (start, arr) => {
  const uniqueArr = Array.from(new Set(arr))

  let separateArr = arr.reduce((acc, currentValue) => {
    const index = uniqueArr.indexOf(currentValue)
    if (index !== -1) acc[index].push(currentValue)
    return acc
  }, Array.from({ length: uniqueArr.length }, () => []))

  const highestLength = separateArr.map(arr => arr.length).sort((a, b) => b - a)[0]

  let resultArr = []

  for (let i = start; i <= (start + highestLength); i++) {
    resultArr.push(i)
  }

  return resultArr
}

console.log(counter(n, array10))
console.log(counter(n1, array11))

// Câu 12
let nums1 = [1, 3]
let nums2 = [2, 4]

const totalMedian = (...args) => {
  let mergeArr = [...args].flat(Infinity).sort((a, b) => a - b)

  const middleIndex = Math.floor(mergeArr.length / 2)

  if (mergeArr.length % 2 === 0) {
    const total = mergeArr.slice(middleIndex - 1, middleIndex + 1)
    console.log(total)
    return (total[0] + total[1]) / 2
  }

  return mergeArr[middleIndex]
}

console.log(totalMedian(nums1, nums2))

// Câu 13
let x = 121
let y = -121

const isPalindrome = (num) => {
  return num.toString().split("").reverse().join("") === num.toString()
}

console.log(isPalindrome(x))

// Câu 14
let strs = ["flower", "flow", "flight"]

const commonPrefix = (arr) => {
  let prefix = arr[0];
  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix
}

console.log(commonPrefix(strs))

// Câu 15

const qs15Validation = (str) => {

  const valid = {
    ')': '(',
    '}': '{',
    ']': '['
  }

  const stack = str.split('').reduce((acc, char) => {
    if (char in valid) {
      const topElement = acc.length ? acc.pop() : '#'
      if (valid[char] !== topElement) acc.push('invalid')
    } else {
      acc.push(char)
    }
    return acc
  }, [])

  return stack.length === 0

}

console.log(qs15Validation('}(/){}]'))