alert("Bienvenid@ a la tienda virtual de Bad Bunny")

alert("Contamos con el stock de Remera, Pantalon, Zapatillas")

let prenda = prompt("Ingrese la prenda que desea")
let precio
let codigo
let impuestos
let entrada

function descuento(objeto){
    return objeto * 0.25
}

function calcularIva(objeto){
    return objeto * 1.21
}

switch (prenda.toLowerCase()){
    case "remera":
        precio = 200
        break
    case "pantalon":
        precio = 150
        break
    case "zapatillas":
        precio = 250
        break 
    default:
        alert("No tenemos stock de esa prenda")
        break
}

alert(prenda.toLowerCase() + " tiene un costo de $" + precio )

impuestos = prompt("¿Quiere ver el precio final de su producto? (impuestos agregados)")

if (impuestos.toLowerCase() === "si") {
    entrada = prompt("¿Tiene un codigo de descuento?")
    if (entrada.toLowerCase() === "si"){
        for (let i = 0; i < 3; i++){
            codigo = prompt("Ingrese su codigo de descuento:")
            if (codigo === "Coder"){
                alert("Codigo aplicado! el costo final de su prenda es de: $" + (calcularIva(precio) - descuento(precio))) 
                break
            } else if (i === 2){
                alert("Supero la cantidad de intentos de codigo de descuento, El costo final de su prenda sin descuento es de: $" + calcularIva(precio))
            }
        }
    } else{
        alert("El costo final de su prenda es de: $" + calcularIva(precio))
    }
}

alert("Regrese cuando quiera!")

console.log("Fin del programa")

