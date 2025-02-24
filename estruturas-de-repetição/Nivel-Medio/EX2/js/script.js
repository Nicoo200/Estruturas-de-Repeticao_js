const reslutado2 =  document.getElementById('resultado');

let soma = 0 ;
let valorMaximo = 100;

for(let i = 1; i <= valorMaximo; i++){
    if(i % 2 == 0){
        soma += i;
    }
}

reslutado2.innerHTML =`<p>A soma dos valores imperes é: ${soma}</p>`;
console.log("A soma dos numeros impares é: ", soma);