const note_title = document.getElementById("note-title");
const note_text = document.getElementById("note-text");
const add_btn = document.getElementById("add-btn");
const clear_btn = document.getElementById("clear-btn");
const notes_list = document.getElementById("notes");

add_btn.addEventListener("click",addNote);
clear_btn.addEventListener("click",clearNotes);

displayNotes();

function getNotes(){
  let notes = localStorage.getItem("notes");
  if(notes === null){
    notes=[];

  }
  else{
    notes = JSON.parse(notes);
  }
  return notes;
}

function displayNotes(){
  notes_list.innerHTML = "";
  let notes=getNotes();
  let html = "";
  notes.forEach((element, index)=>{
    html+=
             `<div class="note">
                <div class="note-cta">
                  <p class="note-counter">Note ${index+1}</p>
                  <div class="note-cta-btn">
                    <button type="button" id="${index}" class="del-btn btn btn-warning btn-sm" onclick="deleteNote(this.id)"><i class="bi bi-trash"></i>Delete</button>
                    <button type="button" id="${index}"class="edit-btn btn btn-secondary btn-sm" onclick="editNote(this.id)"><i class="bi bi-pencil-square"></i>Edit</button>
                  </div>
                </div>
                <hr>
                <h3 class="note-title">Title: ${element.title}</h3>
                <p class="note-text">${element.text}</p>
              </div>`
    ;  
  })
  notes_list.innerHTML = html;

}
// add note to list

function addNote(e){
  e.preventDefault();
  if(note_title.value == "" || note_text.value == ""){
    alert("Please enter note title and details");
  }
  else{
    let currentNotes = getNotes();
    let myNote = {
      title: note_title.value,
      text: note_text.value
    }
    currentNotes.push(myNote);
    localStorage.setItem("notes",JSON.stringify(currentNotes));

    note_title.value="";
    note_text.value="";
    
  }
  displayNotes();
}

//delete note
  
function deleteNote(index){
  if(confirm(`PLease confirm you want to delete note #${index+1}`)){
    let notes = getNotes();
    console.log(notes);
    notes.splice(index,1);
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
  }
}

function editNote(index){
  let notes = getNotes();
  note_title.value=notes[index].title;
  note_text.value=notes[index].text;
  notes.splice(index,1);
  console.log(notes);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}


//clear button

function clearNotes(){
  localStorage.removeItem("notes");
  notes_list.innerHTML = "";
  displayNotes();
}
