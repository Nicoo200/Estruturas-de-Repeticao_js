const exercicio2Div = document.getElementById("exercicio2");

let texto = "<h3>O valores pares são: </h3> <ul>";

for(let numero = 2; numero <22; numero++){
    if((numero % 2) == 0){
        texto += `<li>${numero}</li>`
        // console.log("Os valores são: " + numero)
    }
}

texto += "</ul>";
exercicio2Div.innerHTML = texto;