// Clase

class Prenda {
    constructor (id, producto, precio, codigo){
        this.id = id
        this.producto = producto
        this.precio = precio
        this.codigo = codigo
    }

    calcularIva(){
        this.precio = this.precio * 1.21
    }
}

const mercaderia = [
    new Prenda(1, "remera", 200, "A2F3"),
    new Prenda(3, "buzo", 250, "A89Z"),
    new Prenda(4, "gorro", 50, "BO90"),
    new Prenda(5, "gorra", 75, "X214")
]


// Reconocimiento de usuario

const nomUsuario = document.querySelector("#nombreUsuario")
const localUsuario = localStorage.getItem("Usuario")
const submit = document.querySelector("#submit")
const usuario = document.querySelector("#usuario")

localUsuario === null ? 
Swal.fire(
    'Recuerda poner tu nombre de usuario',
    '',
    'info'
)
: 
nomUsuario.innerText = "Bienvenido " + localUsuario + " a la página oficial de ventas de Bad Bunny"
nomUsuario.classList = "text-center container";

submit.addEventListener("click", () =>{
    const value = usuario.value

    value === "" ? 
    (Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Escribiste un caracter vacio'
    }), submit.value = "Reintenta escribir tu nombre", nomUsuario.innerText = "")
    :
    Swal.fire({
        title: '¿Estas seguro de que quieres guardar este nombre?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Guardar',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          location.reload() 
        }
      })  

    localStorage.setItem("Usuario", value)
})

// Carrito

let carrito = []
let total = 0

const btnGorro = document.querySelector("#botonGorro")
const btnGorra = document.querySelector("#botonGorra")
const btnRemera = document.querySelector("#botonRemera")
const btnBuzo = document.querySelector("#botonBuzo")

const listaPrendas = document.querySelector("table")

function crearEnTabla(pr) {
    const tr = document.createElement("tr")
    
    const tdProducto = document.createElement("td")

    const tdPrecio = document.createElement("td")

    const {producto, precio} = pr

    tdProducto.className = "lista"
    tdProducto.innerText = producto
    
    tdPrecio.className = "lista"
    tdPrecio.innerText = "$" + precio 
    
    tr.append(tdProducto)
    tr.append(tdPrecio)
    
    listaPrendas.append(tr)
} 

btnGorro.addEventListener("click", () => {
    const nuevaPrenda = new Prenda(4, "gorro", 50, "I2P1")
    nuevaPrenda.calcularIva()
    carrito.push(nuevaPrenda)

    const prodAniadido = document.querySelector("#productoAniadido")
    prodAniadido.classList.toggle("quitar")

    const ocultarVentana = () => {
        prodAniadido.className = "aniadido quitar"
    }

    setTimeout(ocultarVentana, 500)

    crearEnTabla(nuevaPrenda)
    total = total + nuevaPrenda.precio
})

btnGorra.addEventListener("click", () => {
    const nuevaPrenda = new Prenda(5, "gorra", 75, "KAI2")
    nuevaPrenda.calcularIva()
    const {precio} = nuevaPrenda
    carrito.push(nuevaPrenda)

    const prodAniadido = document.querySelector("#productoAniadido")
    prodAniadido.classList.toggle("quitar")

    const ocultarVentana = () => {
        prodAniadido.className = "aniadido quitar"
    }

    setTimeout(ocultarVentana, 500)

    crearEnTabla(nuevaPrenda)
    total = total + precio
})

btnRemera.addEventListener("click", () => {
    const nuevaPrenda = new Prenda(1, "remera", 200, "ML44")
    nuevaPrenda.calcularIva()
    const {precio} = nuevaPrenda
    carrito.push(nuevaPrenda)

    const prodAniadido = document.querySelector("#productoAniadido")
    prodAniadido.classList.toggle("quitar")

    const ocultarVentana = () => {
        prodAniadido.className = "aniadido quitar"
    }

    setTimeout(ocultarVentana, 500)

    crearEnTabla(nuevaPrenda)
    total = total + precio
})

btnBuzo.addEventListener("click", () => {
    const nuevaPrenda = new Prenda(3, "buzo", 250, "JU22")
    nuevaPrenda.calcularIva()
    const {precio} = nuevaPrenda
    carrito.push(nuevaPrenda)

    const prodAniadido = document.querySelector("#productoAniadido")
    prodAniadido.classList.toggle("quitar")

    const ocultarVentana = () => {
        prodAniadido.className = "aniadido quitar"
    }

    setTimeout(ocultarVentana, 500)

    crearEnTabla(nuevaPrenda)
    total = total + precio
})

const btnPrecio = document.querySelector("#botonCalculo")

const precioTotal = () => {
    const trNuevo = document.createElement("tr")

    const tdVacio = document.createElement("td")
    tdVacio.className = "precioFinal"
    tdVacio.innerText = "Precio Total(Incluye IVA):"

    const tdPrecio = document.createElement("td")
    tdPrecio.className = "precioFinal"
    tdPrecio.innerText = "$" + total 

    trNuevo.append(tdVacio)
    trNuevo.append(tdPrecio)

    listaPrendas.append(trNuevo)
    btnPrecio.className = "quitar"
}

btnPrecio.addEventListener("click", precioTotal)

// Codigos de productos

const btnLink = document.querySelector("#botonLink")

btnLink.addEventListener("click", () => {
    const prendasJSON = JSON.stringify(carrito)
    localStorage.setItem("prendas", prendasJSON)
})



