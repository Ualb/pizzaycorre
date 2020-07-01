const municipios = {
    Managua: ["Managua", "Ticuantepe", "Tipitapa", "Ciudad Sandino", "El Crucero"],
    Masaya: ["Masaya", "Tisma", "Catarina", "San Juan De Oriente", "La Concepción", "Nindirí", "Nandasmo",
        "Masatepe", "Niquinohomo"
    ]
}

document.addEventListener("DOMContentLoaded", () => {
    //listener de cambio de seleccion de departamento
    document.querySelector("#dpto").onchange = evt => {
        const selec = evt.target.value;
        if (selec == "Departamento" || selec == null) {
            return;
        }
        loadDepartments(selec);
    }
});


/**
 * Carga departamentos desde la lista
 * @param {*} depto 
 */
function loadDepartments(depto) {
    const municip = municipios[depto];
    const selector = document.querySelector("#municipio");
    selector.disabled=false;
    selector.innerHTML = "";
    selector.innerHTML = "<option disabled selected>Municipio</option>";
    municip.forEach(m => {
        selector.innerHTML += `<option value="${m}">${m}</option>`;
    });
}

function validateForm() {
    let fl = true;


    document.querySelectorAll("#form-direction input").forEach(elem => {
        if (!elem.classList.contains("not-req")) {
            if (elem.value == "" || !elem.checkValidity()) {
                fl = false;
                elem.classList.add("is-invalid");
            } else {
                elem.classList.remove("is-invalid");
            }
        }

    });
    document.querySelectorAll("#form-direction select").forEach(elem => {
        console.log(elem.id);
        if (!elem.classList.contains("not-req")) {
            if (elem.value == "0" || !elem.checkValidity()) {
                fl = false;
                elem.classList.add("is-invalid");
            } else {
                elem.classList.remove("is-invalid");
            }
        }
    });

    return fl;
    //select inputs from user data
    document.querySelectorAll("");
}