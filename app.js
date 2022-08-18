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

    tdProducto.className = "lista"
    tdProducto.innerText = pr.producto
    
    tdPrecio.className = "lista"
    tdPrecio.innerText = "$" + pr.precio 
    
    tr.append(tdProducto)
    tr.append(tdPrecio)
    
    listaPrendas.append(tr)
} 

btnGorro.addEventListener("click", () => {
    let nuevaPrenda = new Prenda(4, "gorro", 50, "I2P1")
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
    let nuevaPrenda = new Prenda(5, "gorra", 75, "KAI2")
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

btnRemera.addEventListener("click", () => {
    let nuevaPrenda = new Prenda(1, "remera", 200, "ML44")
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

btnBuzo.addEventListener("click", () => {
    let nuevaPrenda = new Prenda(3, "buzo", 250, "JU22")
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

const btnLink = document.querySelector("#botonLink")

btnLink.addEventListener("click", () => {
    const prendasJSON = JSON.stringify(carrito)
    localStorage.setItem("prendas", prendasJSON)
})

console.log(carrito)

