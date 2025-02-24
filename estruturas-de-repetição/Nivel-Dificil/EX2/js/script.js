function adivinacao() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    console.log("Número aleatório:", numeroAleatorio);

    let tentativaAtual = 1;
    let maxTentativas = 5;

    while (tentativaAtual <= maxTentativas) {
        let tentativa = parseInt(prompt(`(${maxTentativas - tentativaAtual + 1} chances restantes) Tente adivinhar o número entre 1 e 100:`));


        if (tentativa === numeroAleatorio) {
            alert(" Parabéns! Você acertou! ");
            return;
        }

        if (tentativa < numeroAleatorio) {
            alert("O número sorteado é MAIOR do que o número digitado.");
        } else {
            alert("O número sorteado é MENOR do que o número digitado.");
        }

        tentativaAtual++; 
    }

    alert(` Você perdeu! O número era: ${numeroAleatorio}`);
}
