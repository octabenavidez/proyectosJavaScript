const prendaEnLs = localStorage.getItem("prendas")

const carrito = JSON.parse(prendaEnLs)

const tabla = document.querySelector("#segundaTabla")

for (const prenda of carrito){
    const tr = document.createElement("tr")
    
    const tdProducto = document.createElement("td")

    const tdCodigo = document.createElement("td")

    tdProducto.className = "lista"
    tdProducto.innerText = prenda.producto

    tdCodigo.className = "lista"
    tdCodigo.innerText = prenda.codigo 

    tr.append(tdProducto)
    tr.append(tdCodigo)

    tabla.append(tr)
}

// if (carrito.lenght > 2){
//     const mensaje = document.querySelector("#mensaje")

//     const h1 = document.createElement("h1")
//     h1.innerText = "Felicidades por comprar mas de 2 prendas obtiene un cupon de 50% (AZM21S)"
    
//     mensaje.append(h1)
// }




