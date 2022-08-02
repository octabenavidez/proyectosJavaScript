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

alert("Bienvenid@ a la tienda virtual de Bad Bunny")

alert("Contamos con el stock de: " + listaNombres(mercaderia).join(", "))

let carrito = []
let prenda = agregarCarrito(prompt("Ingrese la prenda que desea: "))
let entrada

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

entrada = prompt("¿Desea ver el precio total de sus productos? (Incluye IVA)")

if (entrada.toLowerCase() === "si"){
    let total = 0
    for (let i = 0; i < carrito.length; i++){
        carrito[i].calcularIva()
        total = total + carrito[i].precio
    }
    alert("El total de las prendas que ha seleccionado es: $" + total)
} 

alert("Regrese cuando quiera!")

console.log("Fin del programa")


