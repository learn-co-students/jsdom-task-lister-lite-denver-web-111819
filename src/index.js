document.addEventListener("DOMContentLoaded", () => {
  let listElement = document.getElementById("tasks")
  

  document.getElementById("create-task-form").addEventListener("submit", function(event) {
    event.preventDefault()
    let input = document.getElementById("new-task-description")
    
    var li = document.createElement('li')
    li.innerText = input.value 
    listElement.append(li)
    console.log(li)
   
   document.getElementById("create-task-form").reset()
  } )
});
