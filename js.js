alert("Bienvenido al juego matar zombie! para ganar debes acabar con la vida del zombie")

let zombie = 500

let dañoUsuario = Number(prompt("Coloque la cantidad de daño a inflingir: "))

zombie = zombie - dañoUsuario

while (zombie > 0){
    alert("Debes seguir atacando para ganar!!, restan: " + zombie + " de vida.")
    
    dañoUsuario = Number(prompt("Coloque la cantidad de daño (entre 100 y 150) a inflingir: "))

    zombie = zombie - dañoUsuario
}

alert("Felicitaciones!!! Usted gano")

console.log("Fin del programa")