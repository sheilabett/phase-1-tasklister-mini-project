document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
  const taskInput = document.getElementById('new-task-description');
  const taskDescription = taskInput.value;
  
  const taskList = document.getElementById('tasks');
    const newTask = document.createElement('li');
    newTask.textContent = taskDescription;

    taskList.appendChild(newTask);
    taskInput.value = "";
 });
});