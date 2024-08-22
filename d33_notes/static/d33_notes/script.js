const note_title = document.getElementById("note-title");
const note_text = document.getElementById("note-text");
const add_btn = document.getElementById("add-btn");
const clear_btn = document.getElementById("clear-btn");

add_btn.addEventListener("click",addNote);
clear_btn.addEventListener("click",clearNotes);

function getNotes(){
  let notes = localStorage.getItem("notes");
  if(notes == null){
    notes=[];
  }
  else{
    notes=JSON.parse(notes);
  }

}


function addNote(){
  
}

function clearNote(){
  
}
