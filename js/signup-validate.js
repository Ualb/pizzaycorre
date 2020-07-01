//datos de municipios
const municipios = {
    Managua: ["Managua", "Ticuantepe", "Tipitapa", "Ciudad Sandino", "El Crucero"],
    Masaya: ["Masaya", "Tisma", "Catarina", "San Juan De Oriente", "La Concepción", "Nindirí", "Nandasmo", "Masatepe", "Niquinohomo"]
}


document.addEventListener("DOMContentLoaded", () => {
    //listener de dirección inicial opcional
    document.querySelector("#not-now").onchange = evt => {
        disableDirection(evt.target.checked);
    }
    //listener de cambio de seleccion de departamento
    document.querySelector("#dpto").onchange = evt => {
        const selec = evt.target.value;
        if (selec == "Departamento" || selec == null) {
            return;
        }
        loadDepartments(selec);
    }
    //listener de submit de formulario
    document.querySelector("#signup-form").onsubmit = evt => {
        if (!validateForm()) {
            evt.preventDefault();
        }
    }
});


/**
 * deshabilitar todos los inputs dentro del div direccion
 * @param fl habilitado o deshabilitado
 */

function disableDirection(fl) {
    document.querySelectorAll("#form-direction input").forEach(e => {
        e.disabled = fl;
    })
    document.querySelectorAll("#form-direction select").forEach(e => {
        if (e.id == "municipio") {
            if (document.querySelector("#dpto").value == "Departamento") {
                e.disabled = true;
                return;
            }
        }
        e.disabled = fl;
    })
}


/**
 * Carga departamentos desde la lista
 * @param {*} depto 
 */
function loadDepartments(depto) {
    const municip = municipios[depto];
    const selector = document.querySelector("#municipio");
    selector.innerHTML = "";
    selector.innerHTML = "<option disabled selected>Municipio</option>";
    municip.forEach(m => {
        selector.innerHTML += `<option value="${m}">${m}</option>`;
    });
}

/**
 * Valida el envío del formulario
 */
function validateForm() {
    let fl = true;

    document.querySelectorAll("#form-user input").forEach(elem => {
        if (!elem.classList.contains("not-req")) {
            if (elem.value == "" || !elem.checkValidity()) {
                if (elem.id == "password2") {
                    if (elem.value == "") {
                        document.querySelector("#pswdconfirm-fb").innerHTML = "Confirme la contraseña";
                    }
                }
                fl = false;
                elem.classList.add("is-invalid");
            } else {
                elem.classList.remove("is-invalid");
            }
        }
    });

    if (document.querySelector("#password").value != document.querySelector("#password2").value) {
        document.querySelector("#pswdconfirm-fb").innerHTML = "Las contraseñas no coinciden";
        document.querySelector("#password2").classList.add("is-invalid");
        fl = false;
    }

    document.querySelectorAll("#form-user select").forEach(elem => {
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

    if (!document.querySelector("#not-now").checked) {
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
    }

    if (!document.querySelector("#terms-conditions").checked) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Acepte las condiciones y términos del servicio',
        })
        fl = false;
    }

    return fl;
    //select inputs from user data
    document.querySelectorAll("");
}