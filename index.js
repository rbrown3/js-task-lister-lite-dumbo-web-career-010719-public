const submit = document.getElementById('create-task-form')
submit.addEventListener("submit", addTask)



function addTask(event){
  event.preventDefault()
  const description = document.getElementById('new-task-description').value
  const taskUl = document.querySelector("#tasks")

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
  parentDiv.append(listDiv)
  listDiv.className = 'all-lists'
  listDiv.append(listHead, listUl)
  listHead.innerText = title
  listUl.id = title.replace(" ", "-")
  listArray.push(listHead.innerText)
  console.log(listArray)

  const select = document.getElementById("selectList");


  for (i = 0; i < listArray.length; i++){
    const opt = document.createElement("option");
    document.getElementById("selectList").innerHTML += '<option id="' + i + '">' + listArray[i] + '</option>';
  }


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

const listArray = []

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
