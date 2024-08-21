const task_field = document.getElementById("task-field");
const add_btn = document.getElementById("add-btn");
const task_list = document.getElementById("task-list");
const clear_btn = document.getElementById("clear-btn");
const tgl_storage = document.getElementById("tgl-storage");
const sync_btn = document.getElementById("sync-btn");

add_btn.addEventListener("click", addItem);
clear_btn.addEventListener("click", clearItems);
sync_btn.addEventListener("click", syncItems);

function addItem(){
  if(task_field.value==""){
  alert("Please type out what task you want added to the list.");
  }else{
    console.log(task_field.value);
    storeTask(task_field.value);
    task_field.value="";
    displayTasks();
  }


}

function clearDisplay(){
  task_list.innerHTML="";
}
function clearItems(){
  task_list.innerHTML="";
  localStorage.removeItem("tasks");
}

function syncItems(){}

function getTasks(){
  let tasks;
  if(window.localStorage.getItem("tasks")===null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }
  return tasks
}

function storeTask(new_task){
  let tasks = getTasks();
  tasks.push(new_task);
  localStorage.setItem("tasks",JSON.stringify(tasks));
}

function displayTasks(){
  clearDisplay();
  let tasks = getTasks();

  tasks.forEach((task,index)=>{
    const newLi = document.createElement("li");
    const delBtn = document.createElement("button")

    newLi.classList.add("task-item");
    delBtn.classList.add("task-delete");
    delBtn.innerHTML = `<i class="bi bi-trash" id="${index}" onclick="deleteTask(this.id)"></i> `;
    newLi.appendChild(document.createTextNode(task))
    newLi.appendChild(delBtn)
    task_list.appendChild(newLi);
  });
}

displayTasks();

function deleteTask(id){
  if(confirm("Do you want to delete this?")){
   console.log("delete");
  }
  let tasks = getTasks();
  tasks.splice(id,1);
  localStorage.setItem("tasks",JSON.stringify(tasks));
  displayTasks();

}
