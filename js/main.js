//mostrar modal login
document.addEventListener('DOMContentLoaded', ()=>{
   document.querySelector('#login-btn').onclick = ()=>{
       openModal();
       return false;
   } 
   window.onclick = evt =>{
       if(evt.target == document.querySelector("#login-modal")){
           closeModal();
       }
   }
   document.querySelector("#login-form").onsubmit = validateSubmit;
})

function openModal(){
    var modal = document.querySelector("#login-modal");
    modal.style.display = 'block'
}

function closeModal(){
    var modal = document.querySelector("#login-modal");
    modal.style.display = 'none';
}

function validateSubmit(url) {
    if (document.querySelector("#user").value == "" || document.querySelector("#pswd").value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Rellene todos los campos',
        })
        return false;
    }
    window.location.replace(url);
    return false;
}