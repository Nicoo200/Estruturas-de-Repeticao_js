let palavra = prompt("digite uma palavra");

let invertida = "";

for(let i = palavra.length - 1; i >= 0; i--) {
    invertida += palavra[i];
}

alert("Sua palavra invertida é: " + invertida);