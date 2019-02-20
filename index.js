const listArray = []

// const submit = document.getElementById('create-task-form')
// submit.addEventListener("submit", addTask)

function addTask(event){
  event.preventDefault()
  const description = event.target.querySelector('input[type="text"]').value
  // const taskDiv = document.querySelector("#all-lists")

  // const select = document.getElementById("selectList");
  // const index = parseInt(select.value)
  // const listId = listArray[index].replace(" ", "-")
  // const taskUl = document.getElementById(listId)

  const taskUl = event.target.parentElement.querySelector('ul')
  const taskName = document.createElement('li')
  const deleteButton = document.createElement('button')
  deleteButton.className = "delete"
  taskName.innerText = description
  deleteButton.innerText = "Delete"
  taskUl.append(taskName)
  taskName.append(deleteButton)
  deleteButton.addEventListener("click", deleteTask)
}

function addList(event){
  event.preventDefault()
  console.log(event)
  const title = document.getElementById('new-list-title').value
  const parentDiv = document.querySelector("#parentDiv")
  const listDiv = document.createElement('div')
  const listHead = document.createElement('h2')
  const listUl = document.createElement('ul')

  const listForm = document.createElement('form')
  listForm.innerHTML = `
    <label for="new-task-description">Task description:</label>
    <input type="text" id="new-task-description" name="new-task-description" placeholder="description">
    <input type="submit" value="Create New Task">
  `
  listForm.addEventListener('submit', addTask)

  parentDiv.append(listDiv)
  listDiv.className = 'all-lists'
  listDiv.append(listHead, listUl, listForm)
  listHead.innerText = title
  listUl.id = title.replace(" ", "-")
  const i = listArray.push(listHead.innerText)-1
  console.log(listArray)

  // const select = document.getElementById("selectList");


  // const opt = document.createElement("option");
  // document.getElementById("selectList").innerHTML += '<option value="' + i + '">' + listHead.innerText + '</option>';

  // for (i = 0; i < listArray.length; i++){
  //   const opt = document.createElement("option");
  //   document.getElementById("selectList").innerHTML += '<option value="' + i + '">' + listArray[i] + '</option>';
  // }


  // const deleteButton = document.createElement('button')
  // deleteButton.className = "delete"
  // taskName.innerText = description
  // deleteButton.innerText = "Delete"
  // taskUl.append(taskName)
  // taskName.append(deleteButton)
  // deleteButton.addEventListener("click", deleteTask)
}

const submitList = document.getElementById('create-list-form')
submitList.addEventListener("submit", addList)


// document.getElementById('parentDiv')

function deleteTask(event){
  event.preventDefault()
  const currentLi = event.target.parentNode
  currentLi.remove()
  // const remove = event.target.remove()

}

function newList(event) {


}
























//- A user should be able to type a task into the input field and submit to create a new task
// - When a user creates a new task, the task should show up in the task list
// - A user should be able to delete an item from the list
// - A user should be able to create a new list (Create a new list that lives as a UL nested in the div List)
// - A user should be able to add a task to any list (button for existing lists so that user can select where task goes)

// [example]: https://learn-co-curriculum.github.io/js-task-lister-lite/
