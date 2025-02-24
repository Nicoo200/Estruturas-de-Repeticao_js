const exercicio3Div = document.getElementById("exercicio3");

let textoEX3 = "<h2>O valores  são: </h2> <ul>";

let i = -10;
while(i <0){
    textoEX3 += `<li>${i}</li>`
    console.log("TESTE" + i);
    i++;
}

textoEX3 += "</ul>";
exercicio3Div.innerHTML = textoEX3;