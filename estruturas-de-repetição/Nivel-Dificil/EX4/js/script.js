let resulatdoDiv = document.getElementById('resultado');

let texto1 = "<h3>Piramide de pascal: </h3> ";

let linhas = 5;
let pascal = [[1]];

for(let i = 1; i <= linhas;i++){
    let linha = [1];

    for(let j = 1; j < i; j++){
        linha.push(pascal[i - 1][j - 1] + pascal[i - 1][j]); 
    }

    linha.push(1);
    pascal.push(linha);
}

for (let i = 0; i < pascal.length; i++) {
    // console.log(pascal[i].join(" "));
    
    texto1 += "<br>";
    texto1 += (`${pascal[i]}`);
}

resulatdoDiv.innerHTML = texto1;