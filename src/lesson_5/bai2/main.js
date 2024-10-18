const modalNode = document.getElementById('modal')
const addFormNode = document.getElementById('add-form')
const todoListNode = document.getElementById('todo-list')
const titleIpNode = document.querySelector('input')
const decriptionsIpNode = document.querySelector('textarea')
const formNameNode = document.getElementById('form-name')
const btnSubmitNode = document.getElementById('btn-submit')

let currentForm = 'ADD_FORM'

let currentIdEdit = 0

const handleClose = () => {
  console.log(1);
  modalNode.style.display = 'none'
}

const handleAddTask = () => {
  formNameNode.innerText = 'Add new task'
  btnSubmitNode.innerText = 'Add'
  modalNode.style.display = 'grid'
  currentForm = 'ADD_FORM'
}

let data = [
  {
    id: 1,
    title: 'Learning Java',
    decriptions: 'Lorem ipsum, dolor sit amet consectetur adipisicing?'
  },
  {
    id: 2,
    title: 'Learning Typesript',
    decriptions: 'Lorem ipsum, dolor sit amet consectetur adipisicing?'
  },
]

addFormNode.addEventListener('submit', (e) => {
  e.preventDefault()

  if(titleIpNode.value.trim() === '' || decriptionsIpNode.value.trim() === '') {
    return
  }

  switch (currentForm) {
    case 'ADD_FORM':
      data.push({
        id: data.length + 1,
        title: titleIpNode.value.trim(),
        decriptions: decriptionsIpNode.value.trim()
      })
      updateMemory()
      break
    case 'EDIT_FORM':
      const currentItem = data.find(item => item.id === currentIdEdit)
      currentItem.title = titleIpNode.value.trim()
      currentItem.decriptions = decriptionsIpNode.value.trim()
      updateMemory()
      break
    default:
      break
  }

  console.log(data);

  titleIpNode.value = ''
  decriptionsIpNode.value = ''
  modalNode.style.display = 'none'
  renderTodos()
})

const hanldeDelete = (id) => {
  data = data.filter(item => item.id !== id)
  updateMemory()
  renderTodos()
}

const handleEdit = (id) => {
  formNameNode.innerText = `Edit task ${id}`
  btnSubmitNode.innerText = 'Edit'
  modalNode.style.display = 'grid'

  currentForm = 'EDIT_FORM'
  currentIdEdit = id

  const currentItem = data.find(item => item.id === id)
  titleIpNode.value = currentItem.title
  decriptionsIpNode.value = currentItem.decriptions  
}

const renderTodos = () => {

  const memory = localStorage.getItem('todos')
  if (memory) {
    data = JSON.parse(memory)
  }

  const htmlStr = data.reduce((acc, item, index) => {
    return acc += `
          <li class="list-todo__item">
            <div class="flex-1 flex flex-col w-full">
              <div class="text-lg font-semibold">${item.title}</div>
              <div class="text-[#777e86] text-wrap">${item.decriptions}</div>
            </div>
            <div class="basis-[100px] flex-shrink-0 flex flex-col gap-1 text-sm">
              <button onclick="handleEdit(${item.id})" class="bg-yellow-600 todo-btn__control">Edit</button>
              <button onclick="hanldeDelete(${item.id})" class="bg-red-600 todo-btn__control">Delete</button>
            </div>
          </li>
    `
  }, '')

  todoListNode.innerHTML = htmlStr
}

const updateMemory = () => {
  localStorage.setItem('todos', JSON.stringify(data))
}

renderTodos()