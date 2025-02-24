function decimalParaBinario(numero) {
    if (numero === 0) {
      return "0";
    }
  
    let binario = '';
    
    while (numero > 0) {

        binario = (numero % 2) + binario;
        numero = Math.floor(numero / 2);
    }
  
    return binario;
}
  
let numeroDecimal  = parseInt(prompt("Digite um numero: "));

let numeroBinario = decimalParaBinario(numeroDecimal);
  
alert("O seu numero convertido para binario é:" + numeroBinario); 
  