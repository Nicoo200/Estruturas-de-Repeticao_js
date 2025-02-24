let notas = parseInt(prompt("Quantas notas você deseja informar?"));

let media = 0; 
let somaNotas = 0; 

for (let i = 1; i <= notas; i++) {  
    let numeros = prompt(`Nota Nº${i} de ${notas}: Digite sua nota`);
    let numerosConvertido = parseFloat(numeros);
    
    if (isNaN(numerosConvertido)) {
        alert("Você digitou algo errado, tente novamente");
        i--; 
        continue;
    }

    somaNotas += numerosConvertido;
}

media = somaNotas / notas;  

alert("A sua média é: " + media);  
