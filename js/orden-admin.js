input = document.querySelector('.my-input');
input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        if (input.value === "Juan Rolo" || input.value === "76385865943213") {
            window.location.href= 'orden-en-proceso.html';
        } else {
            alert(`No se ha encontrado ninguna coincidencia con: ${input.value}`);
        } 
    }
});

state = document.querySelector('#change-state');
var count = 0;
if (state != null) {
    state.addEventListener('click', function (event) {
        if (count == 0) {
            count += 1;
            state.innerHTML = 'Marcar como EN CAMINO';
        } else if (count == 1) {
            count += 1;
            state.innerHTML = 'Marcar como ENTREGADO';
        } else {
            count = 0;
            window.location.href= 'ordenes.html';
        }
    });
}