let numero = parseFloat(prompt("Por favor digite um numero")); 

let fatorial = 1; //variável para armazenar o fatorial do número

for(let i = 1; i <=numero; i++){
    fatorial *= i; //fatorial é igual a fatorial vezes i

    console.log("i: " + i + " Fatorial: " + fatorial);
}