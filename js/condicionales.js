const edad = parseInt(prompt('Ingrese su edad'));

if (edad >= 18 && edad <= 71){
    alert('Puede adquirir un permiso para conducir');
}else{
    if (edad <18){
        alert('Sos menor de edad, no puedes tener un permiso para conducir')
    }else{
        alert('No puede manejar ');
    }
}


