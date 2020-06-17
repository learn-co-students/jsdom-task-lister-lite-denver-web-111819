document.addEventListener("DOMContentLoaded", () => {
  let listElement = document.getElementById("tasks")
  let form = document.getElementById("create-task-form")

  form.addEventListener("submit", function(event) {
    event.preventDefault()
    let input = document.getElementById("new-task-description")
    
    let li = document.createElement('li')
    let button = document.createElement('button')
    li.innerText = input.value 
    button.innerText = "Delete Task"
    listElement.append(li)
    li.append(button)
    
    button.addEventListener('click', function(){
      li.remove()
    })
   
   form.reset()
  } )
});
