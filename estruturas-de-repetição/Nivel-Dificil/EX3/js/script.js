function ordenarNumeros() {
    let numeros = [];

    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
        
        if (isNaN(numero)) {
            alert("Por favor, insira um número válido.");
            i--; 
        } else {
            numeros.push(numero);
        }
    }

    // Algoritmo Bubble Sort para ordenar o array
    for (let i = 0; i < numeros.length - 1; i++) {
        for (let j = 0; j < numeros.length - 1 - i; j++) {
            if (numeros[j] > numeros[j + 1]) {
                // Troca os valores de posição
                let temp = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = temp;
            }
        }
    }

    alert("Números ordenados: " + numeros.join(", "));
}

ordenarNumeros();
