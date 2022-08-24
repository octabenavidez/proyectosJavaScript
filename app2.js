const prendaEnLs = localStorage.getItem("prendas")

const carrito = JSON.parse(prendaEnLs)

const tabla = document.querySelector("#segundaTabla")

const mensaje = document.querySelector("#mensaje")

const precios = []

for (const prenda of carrito){
    const tr = document.createElement("tr")
    
    const tdProducto = document.createElement("td")

    const tdCodigo = document.createElement("td")

    const {producto, codigo, precio} = prenda

    precios.push(precio)

    tdProducto.className = "lista"
    tdProducto.innerText = producto

    tdCodigo.className = "lista"
    tdCodigo.innerText = codigo

    tr.append(tdProducto)
    tr.append(tdCodigo)

    tabla.append(tr)
}

function precioMaximo () {
    const h3 = document.createElement("h3")
    h3.classList = "text-center"
    h3.innerText = "El producto mas caro de tu carrito tiene un valor de: $" + Math.max(...precios) 

    mensaje.append(h3)
}

carrito.length > 0 && precioMaximo()






