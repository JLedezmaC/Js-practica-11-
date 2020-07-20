let numero = parseInt(prompt('Digite su numero: '));
let primo = true
function esPrimo(Numeroejemplo){
    for(n = 2; n < numero; n++){
        if(numero % n == 0)
        primo = false;
    }
    
    if ( primo == true){
        console.log("El numero que ingreso es primo");
    }else{
        console.log('El numero que ingreso no es primo');
    }
}
const resultado = esPrimo(numero);
