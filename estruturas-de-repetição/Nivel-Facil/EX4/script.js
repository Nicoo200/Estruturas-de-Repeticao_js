const exercicio4Div = document.getElementById("exercicio4");

let soma = 0;

let texto4 = "<h2>A soma dos valores com for é: </h2> <ul>";

for(i = 1; i<6; i++){
    soma = soma + i;
    texto4 += `<li>${soma}</li>`;
    console.log("A soma deles é: " + soma);
}


texto4 += "</ul>";
exercicio4Div.innerHTML = texto4;
