let largo = 8;

let numero1 = parseInt(prompt("Ingrese su numero"));

let lista = 3;

for(let i =0; i<lista; i++){
    numero1 = parseInt(prompt("Ingrese su numero"));
    largo = 8;
    alinearDerecha(numero1,largo);
}


function alinearDerecha(numero1,largo){
    let string = numero1.toString();
    let vacio = ' ';
    for( let horizontal = string.length; horizontal<largo; horizontal++){
        vacio += ' '; 
    }
    vacio+=string;
    console.log(vacio);
}