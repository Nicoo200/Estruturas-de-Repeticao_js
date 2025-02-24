function isArmstrong(n) {
    let digito = 0, temp = n, soma = 0;

    // Conta o número de dígitos
    while (temp > 0) {
        temp = Math.floor(temp / 10);
        digito++;
    }

    temp = n;

    // Calcula a soma dos dígitos elevados à potência do número de dígitos
    while (temp > 0) {
        let resto = temp % 10;
        soma += Math.pow(resto, digito);
        temp = Math.floor(temp / 10);
    }

    return soma === n; 
}

// Teste
let n = 153;
console.log("Seu número é Armstrong: " + isArmstrong(n) + " (numero: "+ n + ")"); 

n = 370;
console.log("Seu número é Armstrong: " + isArmstrong(n) + " (numero: "+ n + ")"); 

n = 371;
console.log("Seu número é Armstrong: " + isArmstrong(n)+ " (numero: "+ n + ")"); 

n = 407;
console.log("Seu número é Armstrong: " + isArmstrong(n) + " (numero: "+ n + ")"); 
