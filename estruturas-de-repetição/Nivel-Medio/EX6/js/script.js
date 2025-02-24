let palavra = prompt("Digite uma palavra: ");
let arrayV = ["A", "E", "I", "O", "U"];
let i = 0;

for(let letras of palavra.toUpperCase()){
    if(arrayV.includes(letras)){
        i++;
    }

}
console.log("Sua palavra é: "+ palavra +"\nQuantidade de vogais encontradas:", i); 