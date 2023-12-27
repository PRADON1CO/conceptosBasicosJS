//Declarar variables

let saldo = 0;

do{
    const operacion = prompt(
        "Selecione una opción: 1- Consultar saldo, 2- Depositar dinero, 3- Extraer dinero");

        switch (operacion) {
            case "1":
              document.write(`<p>Saldo disponible: $${saldo}</p>`);
              console.log(saldo);
              break;
            case "2":
                console.log('Seleccionó la opción 2');
                const deposito = parseFloat(prompt('Ingrese el monto a depositar'));
              if (deposito > 0) {
                saldo = saldo + deposito;
                document.write(
                  `<p>Ingreso $${deposito} a su cuenta, saldo actual: $${saldo}</p>`
                );
                console.log(`<p>Ingreso $${deposito} a su cuenta, saldo actual: $${saldo}</p>`);
              }else{
                  document.write(`<p>Ingresaste un monto inavlido</p>`);
                  console.log(`<p>Ingresaste un monto inavlido</p>`);
              }
          
              break;
            case "3":
                console.log('Seleccionó la opción 3');
                const extraccion = parseFloat(prompt('Ingrese el monto a extraer'));  
                if(extraccion <= saldo && extraccion > 0){
                    saldo = saldo - extraccion;
                    document.write(
                        `<p>Extraccion $${extraccion} a su cuenta, saldo actual: $${saldo}</p>`
                      );
                      console.log(
                        `<p>Extraccion $${extraccion} a su cuenta, saldo actual: $${saldo}</p>`
                      );
                }else{
                    document.write(`<p>Ingresaste un monto inavlido</p>`);
                    console.log(`<p>Ingresaste un monto inavlido</p>`);
                }
              break;
            default:
              document.write("<p>Seleccionó una opción invalida</p>");
          }
}while(confirm('Desea hacer otra operación?'));




/*
if (operacion === '1'){
    document.write('<p>Mostrar el saldo</p>');
}else if(operacion === '2'){
    document.write('<p>Depositar dinero</p>');
}else if(operacion === '3'){
    document.write('<p>Extraer dinero</p>');
}else{
    document.write('<p>Seleccionó una opción invalida</p>');
}
*/

/*Estructura switch
switch(opcion){
    case '1' o 1 (depende del tipo de dato que necesite)
    case '1':
        document.write('<p>Mostrar el saldo</p>');
        break;
    case '2':
        document.write('<p>Mostrar el saldo</p>');
        break;
    case '3':
        document.write('<p>Mostrar el saldo</p>');
        break;
    default:
        document.write('<p>Seleccionó una opción invalida</p>')
}
*/
