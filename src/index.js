document.addEventListener("DOMContentLoaded", () => {
  let listElement = document.getElementById("tasks")
  let form = document.getElementById("create-task-form")

  form.addEventListener("submit", function(event) {
    event.preventDefault()
    let input = document.getElementById("new-task-description")
    let selection = document.getElementById('urgency')
    
    let li = document.createElement('li')
    let button = document.createElement('button')
    
    if (selection.value == 'low') {
      li.style.color = 'green'
    } else if (selection.value == 'medium'){
      li.style.color = 'yellow'
    } else if (selection.value == 'high') {
      li.style.color = 'red'
    }
    
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
