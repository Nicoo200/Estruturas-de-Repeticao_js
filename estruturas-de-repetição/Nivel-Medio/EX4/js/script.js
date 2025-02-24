console.log("A seguencia de Fibonacci é:\n ");

let valorInicial = 10;

let num1 = 1;
let num2 = 1;

let conta = valorInicial-2;

while(conta > 0){
    let soma = num1 + num2;
    console.log(soma);

    
    num1 = num2;
    num2 = soma;

    conta--;
}
