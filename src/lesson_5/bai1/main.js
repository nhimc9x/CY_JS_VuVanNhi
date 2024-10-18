const inputFileNode = document.querySelector('input[type="file"]')
const dropAreaNode = document.querySelector('#drop-area')
const displayFileNode = document.querySelector('#display-file')

const imgListNode = document.querySelector('.img-list')

const placeholderImg = 'https://user-images.githubusercontent.com/28399150/84750757-fdcc6f00-afbb-11ea-908a-1074b026b06b.png'

inputFileNode.addEventListener('change', (e) => {
  const files = e.target.files
  handleDisplayFile(files)
})

dropAreaNode.addEventListener('dragenter', (e) => {
  e.preventDefault()
  dropAreaNode.classList.remove('border-gray-300')
  dropAreaNode.classList.add('border-green-500')
})

dropAreaNode.addEventListener('dragleave', (e) => {
  e.preventDefault()
  dropAreaNode.classList.remove('border-green-500')
  dropAreaNode.classList.add('border-gray-300')
})

dropAreaNode.addEventListener('drop', (e) => {
  dropAreaNode.classList.remove('border-green-500')
  dropAreaNode.classList.add('border-gray-300')
  e.preventDefault()
  const files = e.dataTransfer.files
  if (files.length > 0) {
    console.log(typeof (inputFileNode.files))
    inputFileNode.files = files
    handleDisplayFile(files)
  }
})

let listImages = []

const handleDisplayFile = (files) => {
  for (let file of files) {
    if (file.type.includes('image')) {
      const srcUrl = URL.createObjectURL(file)
      listImages.push(srcUrl)
      handleRenderImage()
    } else {
      listImages.push(placeholderImg)
      handleRenderImage()
    }
  }
}

const handleDeleteImage = (index) => {
  listImages.splice(index, 1)
  handleRenderImage()
}

const handleRenderImage = () => {
  let htmlStr = listImages.reduce((acc, item, index) => {
    return acc + `
  <div onclick="handleDeleteImage(${index})" class="relative rounded h-28 z-30 overflow-hidden group cursor-pointer">
    <img class="img-cover" src="${item}" alt="">
    <div class="absolute top-0 w-full h-full bg-black/60 place-content-center group-hover:grid hidden *:size-8">
      <img src="assets/delete-svgrepo-com.svg" alt="">
    </div>
  </div>
`
  }, '')

  imgListNode.innerHTML = htmlStr
}