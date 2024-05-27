const modal = document.querySelector(".modal"),
	modalcontent = document.querySelector(".modal-content"),
	btn = document.querySelector(".mdlbtn"), 
	close = document.querySelector(".close");

btn.addEventListener("click",openModal);
close.addEventListener("click",closeModal);
modal.addEventListener("click",closeModal);

function openModal(e){
  e.preventDefault();
  modal.style.display = "block";

}

function closeModal(){
  modalcontent.classList.add("slide-up");
  setTimeout(()=>{
    modal.style.display="none";
    modalcontent.classList.remove("slide-up");
  },500)
}
