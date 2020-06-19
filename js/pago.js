
//  primer paso

// para abilitar o desabilitar la nueva direccion
let continueWithNewDir = false;
function changeNewDir(isDisabled) {
    const new_dir = document.getElementsByClassName('activated');
    const inputs = Array.from(new_dir);

    // necesario para validar las entradas en
    // el boton de siguiente
    continueWithNewDir = !isDisabled;

    for (let i = 0; i < inputs.length; ++i) {
        inputs[i].disabled = isDisabled;
    }
}

// segundo paso

// para abilitar o desabilitar el pago con tarjeta
// o al momento de recibir
let continueWithTarjec = true;
function changePay(isDisabled) {

    continueWithTarjec = isDisabled;

    for (let i = 0; i <= 4; ++i) {
        $('.pay-disabled')[i].disabled = !isDisabled;
    }
}


// tercer paso

// para el boton de canjear
// si el usuario ingresa CXY9 = -$2.00
// si el usuario ingresa KLIP = -$1.75
function becomeCost() {
    const cupon = document.querySelector('#cupon-1');
    if (cupon.value.length == 4) {
        switch (cupon.value) {
            case 'CXY9': {
                document.querySelector('#the-total-cost').innerHTML = '$8.00';
                document.querySelector('#final-total-cost').innerHTML = '$8.00';
                break;
            }
            case 'KLIP': {
                document.querySelector('#the-total-cost').innerHTML = '$8.25';
                document.querySelector('#final-total-cost').innerHTML = '$8.25';
                break;
            }
        }
    }
}

function pay() {
    window.location.href = 'orden-completada.html';
}


// para avanzar al siguiente paso del pago
function next(step) {
    switch (step) {
        case 2: {
            //  se consulta la direccion
            // si es nueva o es una guardada
            if (continueWithNewDir) {
                // validdar los campos de entrada
                let counter = 0;
                for (let i = 1; i <= 7; ++i) {
                    if (document.querySelectorAll(`#input-${i}`)[0].value.length <= 0) {
                        ++counter;
                    }
                }
                if (counter > 0) {
                    alert('Son necesarios todos los campos para tener una dirección clara, por favor rellenelos todos');
                    break;
                }
            }

            $('#collapseThree').collapse('show');
            break;
        }
        case 3: {

            // si desea pagar en linea
            // necesita que todos los campos esten rellenos
            if (continueWithTarjec) {
                let counter = 0;

                for (let i = 1; i <= 4; ++i) {
                    if (document.querySelector(`#pay-${i}`).value.length) {
                        ++counter;
                    }
                }

                if (counter > 0) {
                    alert('Son necesarios todos los campos para tener una dirección clara, por favor rellenelos todos');
                    break;
                }
            }

            $('#collapseFour').collapse('show');
            break;
        }
    }
}