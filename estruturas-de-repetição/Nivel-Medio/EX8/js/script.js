function validacao(numero){
    if (numero <= 1) return false;

    let i = 2;
    while (i <= Math.sqrt(numero)) {
        if (numero % i === 0) {
            return false; 
        }
        i++; 
    }
    return true;  
}

function numerosArray(){
    let primos = [];
    for(let i = 1;i <=20; i++) {
        if(validacao(i)){
            primos.push(i);
        }
    }
    return primos;
} 

console.log(numerosArray()); 

