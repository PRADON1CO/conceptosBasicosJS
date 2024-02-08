//funciones declarativas sin parametros
function top3Juegos(){
//aqui agrego la logica de la funcion
    document.write(`<h2>Top 3 de juegos </h2>`);
    document.write(`<ul>
    <li>Resident evil Village</li>
    <li>Red dead redemotion 2</li>
    <li>The binding of Isaac</li>
    </ul>`)
}

//Funciones con parametros
// function saludarJugador(nombre, juego){
//     document.write(`<p>Hola ${nombre}, biencenido al juego "${juego}". Que tengas una exelente jornada de juegos.</p>`);

// }

//Funciones que retornen un valor
// function juegoClasico(nombreJuego, anioLanzamiento){
//     const anioActual = new Date().getFullYear();
//     const antiguedad =  anioActual - anioLanzamiento;
//     if(antiguedad >= 10){
//         return `El juego ${nombreJuego} es considerado un clasico, tiene una antiguedad de ${antiguedad} años`;
//     }else{
//         return `El juego ${nombreJuego} no es un clasico, tiene una antiguedad de ${antiguedad} años`;
//     }
// }

//arrow functions
//Ejemplo N°1
const juegoClasico = (nombreJugador, anioLanzamiento) =>{
    const anioActual = new Date().getFullYear();
    const antiguedad =  anioActual - anioLanzamiento;
    if(antiguedad >= 10){
        return `El juego ${nombreJuego} es considerado un clasico, tiene una antiguedad de ${antiguedad} años`;
    }else{
        return `El juego ${nombreJuego} no es un clasico, tiene una antiguedad de ${antiguedad} años`;
    }
}
// Ejemplo N°2
const saludarJugador = (nombre, juego) => document.write(`<p>Hola ${nombre}, biencenido al juego "${juego}". Que tengas una exelente jornada de juegos.</p>`);

//Llamar o invocar
top3Juegos();
saludarJugador('Lucas', 'Minecraft');

const nombreJugador = prompt('Ingrese el  nombre del jugador: ');
const juego = prompt('Ingrese su nombre: ');

saludarJugador(nombreJugador, juego);
saludarJugador(nombreJugador);

const esClasico = juegoClasico('GTA SA', 2004);
document.write(esClasico)

document.write(`<p>${juegoClasico('contra', 1987)}</p>`)