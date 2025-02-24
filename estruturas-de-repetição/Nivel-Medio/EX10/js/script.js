let resulatdoDiv = document.getElementById('resultado');
let resultado2Div = document.getElementById('resultado2');


texto1 = "<h3>Piramide de asteriscos: </h3> ";
let filas = 5;

for(let alto = 1; alto <= filas; alto++) {
    for(let espaco = 1; espaco < filas; espaco++) {
        texto1 += `<br>`;
        console.log(" \n");
    }
    for(let asterisco = 1; asterisco <= (alto*2)-1; asterisco++) {
        texto1 += "*";
        console.log("*");
    }
}

texto1 += "<hr>";

resulatdoDiv.innerHTML = texto1;



texto10 = "<h3>Piramide de asteriscos (invertida): </h3> ";
let n = 5;

for(let i = n; i >= 1 ; i--) {
    for(let espaco = 1; espaco <= n-i; espaco++) {
        texto10 += ` <br>`;
        console.log(" \n");
    }
    for(let asterisco = 1; asterisco <= (i*2)-1; asterisco++) {
        texto10 += "*";
        console.log("*");
    }
}

resultado2Div.innerHTML = texto10;
