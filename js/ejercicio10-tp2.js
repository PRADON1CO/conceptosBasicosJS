const filas = parseInt(prompt("Ingrese una cantidad de filas"));
const columnas = parseInt(prompt("Ingrese la cantidad de columnas"));



if (isNaN(filas) || isNaN(columnas)) {
  alert("Por favor, ingrese números válidos para filas y columnas.");
} else {
    const contador = filas * columnas;
    let tabla = "<table>";
  for (let indiceFilas = 0; indiceFilas < filas; indiceFilas++) {
    tabla += "<tr>";
    //Crear otro bucle
    for (let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++) {
      tabla += "<td> " + contador + " </td>";
      contador--;
    }
    //aqui termina el bucle
    tabla += "</tr>";
  }
  tabla += "</table>";

  document.write(tabla);
}
