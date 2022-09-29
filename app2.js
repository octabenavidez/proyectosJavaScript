const prendaEnLs = localStorage.getItem("prendas");

const carrito = JSON.parse(prendaEnLs);

const tabla = document.querySelector("#segundaTabla");

const mensaje = document.querySelector("#mensaje");

const precios = [];

for (const prenda of carrito){
    const {producto, codigo, precio} = prenda;

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td class="lista">${producto}</td>
        <td class="lista">$${codigo}</td>
    `

    precios.push(precio);

    tabla.append(tr);
}

function precioMaximo () {
    const h3 = document.createElement("h3");
    h3.classList = "text-center";
    h3.innerText = "El producto mas caro de tu carrito tiene un valor de: $" + Math.max(...precios); 

    mensaje.append(h3);
}

carrito.length > 0 && precioMaximo();






