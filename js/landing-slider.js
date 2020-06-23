//JSON representando a las personas
const person1 = {
    name: "Nina Margaret",
    description: "Cliente Recurrente",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis a architecto sequi obcaecati magnam maxime necessitatibus non expedita quod, ipsa sit tempora eaque beatae numquam adipisci eius quos inventore facilis.",
    photo_url: "../../img/avatar-sl1.png"
}
const person2= {
    name: "Alexa Smith",
    description: "Cliente Recurrente",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, voluptate aliquid quas ipsa minima sed?",
    photo_url: "../../img/avatar-sl2.jpg"
}
const person3 = {
    name: "Juanita y Pepito Perez",
    description: "Clientes felices",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quae? Consequatur, est explicabo. Iusto molestiae odio accusantium fuga. Minus, facere?",
    photo_url: "../../img/avatar-sl3.jpg"
}

/**
 * Obtiene a la persona del número dado
 * @param  {Number} opt numero de la persona a obtener
 * @return {object}  persona (null si no existe)
 */
function getPerson(opt){
    switch (parseInt(opt)) {
        case 1:
            return person1;
        case 2:
            return person2;
        case 3:
            return person3;
        default:
            return null;
    }
}

/**
 * Actualiza el spinner con la información de la persona
 * @param  {object} person persona a actualizar
 */
function updateSpinner(person){
    document.querySelector("#spinner-description").innerHTML = person.text;
    document.querySelector("#spinner-img").src = person.photo_url;
    document.querySelector("#person-name").innerHTML = person.name;
    document.querySelector("#person-description").innerHTML = person.description;
}

document.addEventListener("DOMContentLoaded", ()=>{
    //agregando la funcionalidad al hacer clic
    document.querySelectorAll(".spin-btn").forEach(btn=>{
        btn.onclick = function(){
            let opt = this.dataset.spin;
            let person = getPerson(opt);
            if(person == null){
                return;
            }

            updateSpinner(person);

            document.querySelectorAll(".spin-li").forEach(li=>{
                li.classList.remove("spin-active");
            })
            this.parentElement.classList.add("spin-active");
        }
    });
});