const pgrResultado = document.getElementById('reslutado');

let numero = parseInt(prompt("Por favor digite um numero para que voce saiba a tabuada"));

texto1 = "<h1>A tabuada do valor escolhido é: \n</h1> <ul>";

for(conta = 1; conta <= 10; conta++){
    texto1 += `${conta} X ${numero} = ${conta * numero} <br>`;
}

texto1 += "</ul>";
pgrResultado.innerHTML = texto1;