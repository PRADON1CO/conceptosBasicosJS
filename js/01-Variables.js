// comentario de unica linea

/*
Esto es un comentario
de multiples lineas
jejej

*/

// Mostrar comentarios desde le archivo de js
console.log("Mensaje por consola");
console.log("Mensaje por consola");

// Mostrar un comentario en el documento html
document.write(
  '<p class="text-center text-primary">Primer mensaje en el documento html</p>'
);

// Ventana emergentes
//alert('Ejemplo de un alerta')

// Declarar e inacializar una variable
//  declarar o crear una variale (var - let - const)

let regaloNavidad = "Iphone 15 Pro Max";

document.write("Regalo de navidad 2023: " + regaloNavidad + "<br>");

// modificar el contenido de una variable creada con la palabra let
regaloNavidad = "Rtx4090 Rog Strix";

document.write("Regalo de navidad 2023: " + regaloNavidad);

const urlUniverse = "https://universe.rollingcodeschool.com/my-courses";

document.write("<br>Página de Universe " + urlUniverse);

//urlUniverse = 123;
//document.write('<br>Página de Universe '+ urlUniverse);

let precioSinImpuestos = 1100;
let impuesto = 600;

// document.write('<br>El precio del Iphone 15 Pro Max es: $'+ (precioSinImpuestos + impuesto) + 'USD');

let totalConImpuestos = precioSinImpuestos + impuesto;

document.write(
  "<br>El precio del Iphone 15 Pro Max es: $" + totalConImpuestos + "USD"
);

//Agregamos ejercicio de Elias Perez

//parseInt('50')
//parseFloat('50.3')
let gradosCelcius = parseInt(prompt('Ingrese un valor en grados centigrados'));
console.log(gradosCelcius);

let gradosFahrehait = (gradosCelcius * 9) / 5 + 32;

document.write(
  "<br>" +
    gradosCelcius +
    " °C grados celcius son equivalente a " +
    gradosFahrehait +
    " °F grados fahrenhait"
);

document.write("<br>Otro ejemplo " + (gradosCelcius + 50));
