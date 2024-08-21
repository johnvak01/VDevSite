const task_field = document.getElementById("task-field");
const add_btn = document.getElementById("add-btn");
const task_list = document.getElementById("task-list");
const clear_btn = document.getElementById("clear-btn");
const tgl_storage = document.getElementById("tgl-storage");
const sync_btn = document.getElementById("sync-btn");

const addTask = ()=>{
  if(task_field.value != ""){
    const newLi = document.createElement("li");  
    const newDelBtn = document.createElement("button");
    newDelBtn.innerHTML = `<i class="bi bi-trash"></i>`
    
    newLi.classList.add("task-item");
    newDelBtn.classList.add("task-delete");

    newLi.textContent=task_field.value;
    newLi.appendChild(newDelBtn);
    
    task_list.appendChild(newLi);
    task_field.value="";
    
    newDelBtn.addEventListener("click", deleteTask);

    if(tgl_storage.checked){
      window.localStorage.setItem(newLi.textContent,window.localStorage.length);
    }

  }else{
    alert("Please enter a task");
  }
}

const deleteAllTask = ()=>{
  const delCheck = confirm("do you want to delete all of the list items?");
  if(delCheck){
    while(task_list.childNodes.length>0){
      task_list.removeChild(task_list.lastChild);
    }
  }
  if(tgl_storage.checked){
    window.localStorage.clear();
  }
}
const deleteTask = function(){
  const delCheck = confirm("do you want to delete this?");
  if(delCheck){
    const parent=this.parentNode;
    parent.remove();
    if(tgl_storage.checked){
      window.localStorage.removeItem(this.parentNode.textContent);
      console.log("removed item");
    }
  }
}

const syncWithMemory = function(){
  //add existing items to memory and remove from list
  let current_list=task_list.childNodes
  console.log("length" + current_list.length);
  for(let x=0; x<current_list.length-1; x++){
      window.localStorage.setItem(current_list.item(x).textContent,window.localStorage.length);
  console.log("added" + current_list.item(x).textContent);
  }

  
  //remove items from list
  while(task_list.childNodes.length>0){
    task_list.removeChild(task_list.lastChild);
  }
  
  //add items from memory to list
  for(let x=0; x<window.localStorage.length;x++){
  
    const newLi = document.createElement("li");  
    const newDelBtn = document.createElement("button");
    newDelBtn.innerHTML = `<i class="bi bi-trash"></i>`
    
    newLi.classList.add("task-item");
    newDelBtn.classList.add("task-delete");

    newLi.textContent=window.localStorage.key(x);
    newLi.appendChild(newDelBtn);
    
    task_list.appendChild(newLi);
    task_field.value="";
    
    newDelBtn.addEventListener("click", deleteTask);
  }
}


add_btn.addEventListener("click", addTask);
clear_btn.addEventListener("click", deleteAllTask);
sync_btn.addEventListener("click",syncWithMemory);
