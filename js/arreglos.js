// cerae un array vacio 

const listaPraductos = [];

// crear un array con datos
const juegos = ['Startdew valley', 1, 'fifa', 'Leaguel os legends', true, 2024, 'Fortnite'];

//mostra un array
console.log(listaPraductos);
document.write(juegos);

const posicion = 0;

document.write(`<p>El array Juegos tiene ${juegos.length} elemntos</p>`);
document.write(`<p>El Juego numero 3 es ${juegos[2]}</p>`);
document.write(`<p>El Juego numero 1 es ${juegos[posicion]}</p>`);
document.write(`<p>El Juego numero 20 es ${juegos[20]}</p>`);


document.write('<h2>Array de juegos 🎮</h2>');

document.write(`<ul>`)
for (let posicion = 0; posicion < juegos.length ;posicion++){
    document.write(`<li> ${juegos[posicion]} </li>`)
}

document.write(`</ul>`)