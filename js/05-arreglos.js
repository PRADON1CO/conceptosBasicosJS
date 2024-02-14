// cerae un array vacio 

const listaPraductos = [];

// crear un array con datos
const juegos = ['Startdew valley', 1, 'fifa', 'Leaguel os legends', true, 2024, 'Fortnite'];

const mostrarJuegos = (titulo) => {
    document.write(`<h2>${titulo} 🎮 (${juegos.length})</h2>`);
    document.write(`<ul>`)
    for (let posicion = 0; posicion < juegos.length ;posicion++){
        document.write(`<li> ${juegos[posicion]} </li>`);
}

document.write(`</ul>`);
}
//mostra un array
console.log(listaPraductos);
document.write(juegos);

const posicion = 0;

document.write(`<p>El array Juegos tiene ${juegos.length} elemntos</p>`);
document.write(`<p>El Juego numero 3 es ${juegos[2]}</p>`);
document.write(`<p>El Juego numero 1 es ${juegos[posicion]}</p>`);
document.write(`<p>El Juego numero 20 es ${juegos[20]}</p>`);


mostrarJuegos('Array de jeugos');

//Agragar elementos al array
juegos.unshift('Dark sould', 'dota');

document.write(`<h2>Nuevo juego al rpincipio del array 🎮 (${juegos.length})</h2>`);
document.write(`<ul>`);
for (let posicion = 0; posicion < juegos.length ;posicion++){
    document.write(`<li> ${juegos[posicion]} </li>`);
}
document.write(`</ul>`)

juegos.push('MARIO BROS');

document.write(`<h2>Nuevo juego al final del array 🎮 (${juegos.length})</h2>`);

document.write(`<ul>`);
for (let posicion = 0; posicion < juegos.length ;posicion++){
    document.write(`<li> ${juegos[posicion]} </li>`);
}

document.write(`</ul>`);

juegos.splice(6 , 0, 'terraria');

document.write(`<h2>Nuevo juego en la posicio 6 del juego 🎮 (${juegos.length})</h2>`);

document.write(`<ul>`)
for (let posicion = 0; posicion < juegos.length ;posicion++){
    document.write(`<li> ${juegos[posicion]} </li>`);
}

document.write(`</ul>`);

 //modificar elementos del array 
juegos[3] = 'Dont starve';
//juegos = 'Dont starve' este codigo es incorrecto, no puedo cambiar el contenido total del array otro valor 

document.write(`<h2>Modificamos el juego de la posicio 6 del juego 🎮 (${juegos.length})</h2>`);

document.write(`<ul>`)
for (let posicion = 0; posicion < juegos.length ;posicion++){
    document.write(`<li> ${juegos[posicion]} </li>`);
}

document.write(`</ul>`);

//eliminar elementos del array

juegos.shift();
document.write(`<h2>Borramos el primer elemento del array🎮 (${juegos.length})</h2>`);

document.write(`<ul>`)
for (let posicion = 0; posicion < juegos.length ;posicion++){
    document.write(`<li> ${juegos[posicion]} </li>`);
}

document.write(`</ul>`);

juegos.splice(3,1);
document.write(`<h2>Borramos el elemento de la posicion 3 del array 🎮 (${juegos.length})</h2>`);

document.write(`<ul>`)
for (let posicion = 0; posicion < juegos.length ;posicion++){
    document.write(`<li> ${juegos[posicion]} </li>`);
}

document.write(`</ul>`);

juegos.pop();
document.write(`<h2>borramos el ultimo elemto del array 🎮 (${juegos.length})</h2>`);

document.write(`<ul>`)
for (let posicion = 0; posicion < juegos.length ;posicion++){
    document.write(`<li> ${juegos[posicion]} </li>`);
}

document.write(`</ul>`);
