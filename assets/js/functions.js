// Definicion de  jugada cpu
function jugadaCachipun(jugada, cpu) {
    if (jugada === cpu) {
        alert("¡Es un empate! Tu jugada: " + jugada + ", Jugada CPU: " + cpu);
    } else if (
        (jugada === "piedra" && cpu === "tijera") ||
        (jugada === "papel" && cpu === "piedra") ||
        (jugada === "tijera" && cpu === "papel")
    ) {
        alert("¡Ganaste! Tu jugada: " + jugada + ", Jugada CPU: " + cpu);
    } else {
        alert("¡Perdiste! Tu jugada: " + jugada + ", Jugada CPU: " + cpu);
    }
}
function jugar() {
    let numeroJugada = +prompt("Ingresa las veces que quieres jugar al cachipún");
    for (let i = 1; i <= numeroJugada; i++) {
        let jugada = prompt("Ingresa tu jugada: piedra, papel o tijera").trim().toLowerCase();
        let cpu;
        const randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber === 0) {
            cpu = "piedra";
        } else if (randomNumber === 1) {
            cpu = "papel";
        } else {
            cpu = "tijera";
        }
        jugadaCachipun(jugada, cpu);
    }
}

jugar();



