let valor1 = parseInt(prompt('Ingrese su primer numero'));
let valor2 = parseInt(prompt('Ingrese su segundo numero'));

function max (num1, num2){
    if(num1>num2){
        return console.log('El primer numero es mayor');
    }else{
        return console.log("El segundo numero es mayor");
    }
}

const numeros = max(valor1, valor2);

