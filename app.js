class Prenda {
    constructor (id, producto, precio){
        this.id = id
        this.producto = producto
        this.precio = precio
    }

    calcularIva(){
        this.precio = this.precio * 1.21
    }
}

const mercaderia = [
    new Prenda(1, "remera", 200),
    new Prenda(2, "pantalon", 150),
    new Prenda(3, "zapatillas", 250),
    new Prenda(4, "medias", 50),
    new Prenda(5, "lentes", 75)
]

const listaNombres = (lista) => {
    let prendas = []
    for (const el of lista){
        prendas.push(el.producto)
    }

    return prendas
}

const borrarCarrito = (elemento) => {
    let indice = listaNombres(carrito).indexOf(elemento)

    if (indice != -1 ) {
        carrito.splice(indice, 1)
    } 
}

const agregarCarrito = (prenda) => {
    let indice = listaNombres(mercaderia).indexOf(prenda.toLowerCase())

    if (indice != -1){
        carrito.push(mercaderia[indice]) 
    }
}

const filtrarPorPrecio = (filtro) => {
    const busqueda = []

    for (const el of mercaderia) {
    if (el.precio >= filtro){
            busqueda.push( el )
        }
    }

    return busqueda
}

let entrada
let precios

alert("Bienvenid@ a la tienda virtual de Bad Bunny")

entrada = prompt("¿Quiere filtrar las prendas por precio?")

if (entrada === "si"){
    precios = prompt("Ingrese el monto minimo que quiere visualizar:")
    alert("Los productos por arriba del valor indicado son: "+ listaNombres(filtrarPorPrecio(precios)).join(", "))
}

alert("Contamos con el stock de: " + listaNombres(mercaderia).join(", "))

let carrito = []
let prenda = agregarCarrito(prompt("Ingrese la prenda que desea: "))

entrada = prompt("¿Quiere comprar otra prenda?")

while (entrada.toLowerCase() != "no"){
    prenda = agregarCarrito(prompt("Ingrese la prenda que desea: "))
    entrada = prompt("¿Quiere comprar otra prenda?")
}

entrada = prompt("¿Quiere eliminar de su carrito alguna prenda?")

if (entrada.toLowerCase() === "si"){
    alert("Usted tiene estas prendas: " + listaNombres(carrito).join(", "))
    prenda = prompt("Ingrese el nombre de la prenda a eliminar: ")
    borrarCarrito(prenda.toLowerCase())
} 

let total = 0

for (let i = 0; i < carrito.length; i++){
    carrito[i].calcularIva()
    total = total + carrito[i].precio
}

alert("Regrese cuando quiera!")

const listaPrendas = document.getElementById("tabla")

for (const prenda of carrito) {
    const tr = document.createElement("tr")

    const tdProducto = document.createElement("td")
    tdProducto.className = "lista"
    tdProducto.innerText = prenda.producto

    const tdPrecio = document.createElement("td")
    tdPrecio.className = "lista"
    tdPrecio.innerText = "$" + prenda.precio 

    tr.append(tdProducto)
    tr.append(tdPrecio)

    listaPrendas.append(tr)
}

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

console.log("Fin del programa")

