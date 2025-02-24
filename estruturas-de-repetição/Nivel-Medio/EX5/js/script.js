let maiorValor  = 10;
let numeroTentativas = 5;


for(let i = 1; i < numeroTentativas; i++){
    let numero = prompt(`Tentativa ${i} de ${numeroTentativas}: Digite um número`);
    let numeroConvertido = parseInt(numero);
    
    if (isNaN(numeroConvertido)) {
        alert('Você não digitou um número!');
        continue;
    }

    if(numeroConvertido > maiorValor){
        alert("O valor digitado é maior que o valor maximo");
    }else{
        alert(`Você digitou um número válido: ${numeroConvertido}`);
        break;
    }

    if(i === numeroTentativas){
        alert("Você pode digitar apenas 5 numeros");
    }
}