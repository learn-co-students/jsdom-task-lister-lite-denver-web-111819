document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form")
  const taskUL = document.getElementById("tasks")
  const subButton = document.getElementById("button")

  taskForm.addEventListener("submit", (event) => {
    console.log("Form event", event)
    event.preventDefault()
    const newTaskLI = document.createElement("li")
    newTaskLI.innerText = event.target.childNodes[3].value
    taskUL.appendChild(newTaskLI)
  })

  subButton.addEventListener("click", (event) => {
    console.log("Button event", event)
  })
});
