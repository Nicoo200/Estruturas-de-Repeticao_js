const exercicio5Div = document.getElementById("exercicio5");


texto5 = "<h2>Os 15 multiplos de 3 são: </h2><ul>";

for(i =1; i <= 15; i++){
    let multiplos = i*3;
    texto5 += `<li> ${i} X 3 = ${multiplos} </li>`;
    console.log("TESTE: " + multiplos);
}

texto5 +="</ul>";

exercicio5Div.innerHTML=texto5;