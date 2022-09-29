// Api con fetch
const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');

// Fetch Exchange Rate api
function calculate(){
    const moneda_one = monedaEl_one.value;
    const moneda_two = monedaEl_two.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[moneda_two];
       
       cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

       cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);
    } );
}

//Event listeners
monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);

taza.addEventListener('click', () =>{
    const temp = monedaEl_one.value;
    monedaEl_one.value = monedaEl_two.value;
    monedaEl_two.value = temp;
    calculate();
} );

calculate();

// Reconocimiento de usuario
const nomUsuario = document.querySelector("#nombreUsuario");
const localUsuario = localStorage.getItem("Usuario");
const submit = document.querySelector("#submit");
const usuario = document.querySelector("#usuario");

localUsuario === null ? 
Swal.fire(
    'Recuerda poner tu nombre de usuario',
    '',
    'info'
)
: 
nomUsuario.innerText = "Bienvenido " + localUsuario + " a la página oficial de ventas de Bad Bunny";
nomUsuario.classList = "text-center container";

submit.addEventListener("click", () =>{
    const value = usuario.value;

    value === "" ? 
    (Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Escribiste un caracter vacio'
    }), submit.value = "Reintenta escribir tu nombre")
    :
    Swal.fire({
        title: '¿Estas seguro de que quieres guardar este nombre?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Guardar',
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload(); 
        }
      })  

    localStorage.setItem("Usuario", value);
})

// Generando productos
const contenedorPrendas = document.querySelector('#contenedor-prendas');

stockPrendas.forEach((producto) => {
    const div = document.createElement('div');
    div.className = ('card m-2');
    div.innerHTML = `
        <img src=${producto.img} class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
            <h5 class="card-title">${producto.producto}</h5>
            <p class="card-text">$${producto.precio}</p>
            <button id="agregar-${producto.id}" class="btn btn-primary botonPrenda">Agregar al carrito</button>
        </div>
    `
    contenedorPrendas.append(div)

    // Mensaje (producto añadido) y generar carrito
    const botonPrenda = document.querySelector(`#agregar-${producto.id}`);

    botonPrenda.addEventListener('click', () => {
        const prodAniadido = document.querySelector("#productoAniadido");
        prodAniadido.classList.toggle("quitar");
    
        const ocultarVentana = () => {
            prodAniadido.className = "aniadido quitar";
        }
    
        setTimeout(ocultarVentana, 500);

        agregarAlCarrito(producto.id);
    })
});

// Generando el carrito
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const listaPrendas = document.querySelector("tbody");
const btnVaciar = document.querySelector('#botonVaciar');
const contadorPrendas = document.querySelector('#contadorPrendas');
const btnCerrar = document.querySelector("#botonCerrar");
const btnPrecio = document.querySelector("#botonCalculo");
const btnCarrito = document.querySelector("#botonCarrito");
const btnTerminar = document.querySelector("#botonTerminar");

// Eliminar botones si no hay elementos
const toggleVaciar = () => {
    if(!carrito.length){
        btnVaciar.classList.add('quitar');
        btnPrecio.classList.add('quitar');
        btnTerminar.classList.add('quitar');
    }
}

btnCarrito.addEventListener('click', toggleVaciar);

// Agregar prendas al carrito
const agregarAlCarrito = (id) => {
    const prendaEnCarrito = carrito.find((prod) => prod.id === id);

    if(prendaEnCarrito){
        prendaEnCarrito.cantidad += 1;
    } else{
        const prenda = stockPrendas.find((prod) => prod.id === id);

        carrito.push({
            ...prenda,
            cantidad: 1
        });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));

    renderDelCarrito();
}

// Renderizado de cada elemento del carrito
const renderDelCarrito = () => {
    listaPrendas.innerHTML = "";

    carrito.forEach((prod) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="lista">${prod.producto}</td>
            <td class="lista">$${prod.precio}</td>
            <td class="lista">${prod.cantidad}</td>
            <td class="tdIcono" onclick="eliminarPrenda(${prod.id})"><img src="img/trash-outline.svg" alt="Icono basura"></td>
        `
        listaPrendas.append(tr);
    })

    // Actualizar Contador de prendas
    contadorPrendas.innerHTML = `${carrito.length}`
}

// Borrar elemento del array
const eliminarPrenda = (id) => {
    const producto = carrito.find((prod) => prod.id === id);

    if(producto.cantidad > 1){
        producto.cantidad -= 1;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        renderDelCarrito();
        return
    }

    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);

    localStorage.setItem('carrito', JSON.stringify(carrito));

    renderDelCarrito();
}

// Vaciar Carrito
const vaciarCarrito = () => {
    carrito.length = 0;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderDelCarrito();
}

btnVaciar.addEventListener('click', vaciarCarrito);

//Precio total carrito
const actualizarTotal = () => {
    const tr = document.createElement('tr');
    const total = carrito.reduce((acc, prod) => acc += (prod.precio * prod.cantidad), 0)
    tr.className = "trNuevo";
    tr.innerHTML = `
        <td class="precioFinal">Precio Total(Incluye IVA):</td>
        <td class="precioFinal">$${total}</td>
    `

    listaPrendas.append(tr);
    btnPrecio.className = "quitar";
    btnVaciar.className = "quitar";
    const botonEliminar = document.querySelectorAll('.tdIcono');
    if(botonEliminar.length > 0){
        botonEliminar.forEach((icono) => {
            icono.classList.add('quitar');
        })
    }
}

btnPrecio.addEventListener("click", actualizarTotal);

// Reinicio al cerrar modal
const reinicioCarrito = () => {
    const tdEliminado = document.querySelector(".trNuevo");
    if(tdEliminado !== null){
        tdEliminado.remove();
    }

    btnPrecio.className = "btn btn-secondary";
    btnVaciar.className = "btn btn-danger";
    btnTerminar.className = "btn btn-info w-25 mx-4";
    const botonEliminar = document.querySelectorAll('.tdIcono');
    botonEliminar.forEach((icono) => {
        icono.classList.remove('quitar');
    })
}

btnCerrar.addEventListener("click", reinicioCarrito);

// Codigos de productos
const btnLink = document.querySelector("#botonLink")

btnLink.addEventListener("click", () => {
    const prendasJSON = JSON.stringify(carrito)
    localStorage.setItem("prendas", prendasJSON)
})

// Prevenir accion de terminar pedido en caso de que no haya productos
btnTerminar.addEventListener("click", (e) => {
    if(carrito.length < 1){
        e.preventDefault();
    }
})

// Para el localstorage del carrito
renderDelCarrito();
