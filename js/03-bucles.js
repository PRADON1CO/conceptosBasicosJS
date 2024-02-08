

/*while(condicion logica){
    todas las lineas de codigo que quiero repetir varias veces
    agregar un codigo para que la condicion se deje de cumplir
}*/
// let renglon = 1;

// while(renglon <= 100){
//     // document.write('<p>Renglon numero ' + renglon + '</p>');
//     document.write(`<p>Renglon numero ${renglon} </p>`);
//     renglon ++; // renglon = renglon + 1;
// }


//do while
/*
do{

}while(condicion logica);
    todas las lineas de codigo que quiero repetir varias veces
    agregar un codigo para que la condicion se deje de cumplir
*/

// let renglon = 1;

// do{
//     document.write(`<p>Renglon numero ${renglon} </p>`);
//     renglon ++;
// }while(renglon <=50);

//for
/*
    for(iniciar una variable; condicion logica; incrementar o decrementar una variable){
        todas las lineas de codigo que quiero repetir varias veces
    }
*/

for(let renglon = 1; renglon <= 50; renglon ++){
    document.write(`<p>Renglon numero ${renglon} </p>`);
}