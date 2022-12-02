function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


let confirmButton = document.getElementsByClassName('contact_button')

confirmButton.addEventListener("click", confirmButtonfunction);
function confirmButtonfunction(e){
    e.preventDefault();

}