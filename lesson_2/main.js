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
  const arrOrinaal = text.split(" ")

  const arrCountWord = arrOrinaal.map(word => word.length)

  const cloneArr = [...arrCountWord].sort((a, b) => b - a)

  // const result = cloneArr[0]

  // console.log(arrCountWord.indexOf(result))

  // console.log(arrOrinaal.at(36))

  // console.log(result)

  return arrOrinaal.at(arrCountWord.indexOf(cloneArr[0]))
}

console.log(countWords(decription))