// Seleccionando el main y obteniendo los datos de localstorage
const carritoEnLs = localStorage.getItem("carrito");
const carrito = JSON.parse(carritoEnLs);
const mainForm = document.querySelector("#mainForm");

// Creando mensaje
const div = document.createElement('div');
div.className = 'aniadido mt-2';
div.innerHTML = `
    <h2 class="text-center">Felicidades!!</h2>
    <p class="text-center fs-3">Estos son tus productos:</p>
`
mainForm.append(div);

// Agregando al mensaje los productos
carrito.forEach((prenda) => {
    const p = document.createElement('p');
    p.className = "text-center text-uppercase fs-2";
    if(prenda.cantidad > 1){
        p.innerHTML = `${prenda.cantidad} ${prenda.producto}s 🔥`
    } else{
        p.innerHTML = `${prenda.cantidad} ${prenda.producto} 🔥`
    }

    div.append(p);
});

// Agregando el total
const p = document.createElement('p')
p.className = "text-center text-uppercase fs-2";
p.innerHTML = `TOTAL = $${carrito.reduce((acc, prod) => acc += (prod.precio * prod.cantidad), 0)}`

div.append(p);

// Formulario 
const formEmail = document.querySelector('#exampleInputEmail1');
const formNombre = document.querySelector('#nombreForm');
const form = document.querySelector('#form');

form.addEventListener('submit', (evento) => {
    if(!formEmail.value || !formNombre.value){
        Swal.fire({
            icon: 'error',
            title: 'Incorrecto',
            text: 'Debes rellenar el campo de email o de nombre!',
        })
        
        evento.preventDefault();
    } else{
        Swal.fire({
            icon: 'success',
            title: 'Perfecto',
            text: 'Recibiras un e-mail con los detalles de tu compra',
        })

        form.innerHTML = "";
        evento.preventDefault();
    }
})






