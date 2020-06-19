// funciones para incrementar el costo
// acorde incrementa la cantidad solicitada

let default_value_input1 = 1
const input1 = document.getElementById('input1');
input1.addEventListener('change', function (e) {
    const value = parseFloat(e.target.value) * 5;
    const parent = e.target.parentNode;
    const cost = parent.previousSibling.previousSibling.firstChild.nextSibling;
    cost.innerHTML = `$${value}.00`;

    const amountOfProducts = parseInt(e.target.value);
    let type = false;
    if (amountOfProducts > default_value_input1) {
        type = true;
    }

    modifyProduct(amountOfProducts - default_value_input1, type);
    default_value_input1 =  amountOfProducts;
});


let default_value_input2 = 1;
const input2 = document.getElementById('input2');
input2.addEventListener('change', function (e) {
    const value = parseFloat(e.target.value) * 5;
    const parent = e.target.parentNode;
    const cost = parent.previousSibling.previousSibling.firstChild.nextSibling;
    cost.innerHTML = `$${value}.00`;

    const amountOfProducts = parseInt(e.target.value);
    let type = false;
    if (amountOfProducts > default_value_input2) {
        type = true;
    }

    modifyProduct(amountOfProducts - default_value_input2, type);
    default_value_input2 =  amountOfProducts;
});


// funcion para eliminar productos
function deleteProduct(e) {
    if (e === 'firstProduct') {
        const li = document.getElementById('first-product');
         modifyProduct(-default_value_input1, false);
        li.remove(li); 
    } else {
        const li = document.getElementById('second-product');
        modifyProduct(-default_value_input2, false);
        li.remove(li);
    }
}

// cantidad y precio 
function modifyProduct(quantity, isIncrease) {
    const product_cost = document.querySelector('.detail-list__product-cost');
    const left_child = product_cost.firstChild.nextSibling;
    const product_quantity = left_child.firstChild.nextSibling;
    const actuality_value = product_quantity.innerHTML.split("(")[1].split(" ")[0];
    if (isIncrease) {
        quantity += parseInt(actuality_value); 
    } else {
        quantity = parseInt(actuality_value) + quantity;  
    }
    modifyCosts(quantity - parseInt(actuality_value), isIncrease);
    product_quantity.innerHTML = `Precio (${quantity} Productos)`
}

// costo de los productos  
function modifyCosts(quantity, isIncrease) {
    const product_list = document.querySelector('.detail-list__product-cost');
    const last_child = product_list.lastChild.previousSibling;
    const text = last_child.firstChild.nextSibling.textContent;
    let actualy_value = parseFloat(text.substring(1, text.length - 1));
    if (isIncrease) {
        actualy_value += quantity * 5;
    } else {
        actualy_value += quantity * 5;
    } 
    last_child.firstChild.nextSibling.textContent = `$${actualy_value}.00`;
    
    // costo a pagar
    const final_cost = document.getElementsByClassName('final-cost');
    final_cost[0].textContent = `$${actualy_value}.00`;  
}
 