//formulaire de contacte

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


const button = document.querySelector('.send_button')
button.addEventListener('click',e => sendInfoConsole(e))
function sendInfoConsole(e) {
    //e.preventDefault desactive les effets par defaut du bouton
    e.preventDefault()
    const prenom = document.querySelector('.prenom')
    const nom = document.querySelector('.nom')
    const email = document.querySelector('.email')
    const textMessage = document.querySelector('.textMessage')
    prenom.addEventListener('change', console.log(prenom.value))
    nom.addEventListener('change', console.log(nom.value))
    email.addEventListener('change', console.log(email.value))
    textMessage.addEventListener('change', console.log(textMessage.value))
    closeModal()
}