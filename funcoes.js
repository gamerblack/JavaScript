let n = 5;
let n2 = 20;
let pi = Math.PI;

console.log(pi);
let aC = areaCirculo(n);
console.log(`A área é ${n} cm²`);

console.log(`\n\nFunção área Circulo - Função Declarada por Bloco`);

console.log(`A área do circulo é ${aC}cm²`);

function areaCirculo (raio = 1) {
    console.log(raio);
    return Math.PI * (raio ** 2);
}


console.log(`\n\nFunção área Quadrado - Função Declarada por Expressão`);

const aQ = function (lado){
    return lado**2;
}

console.log(`A área é ${aQ(n2)}cm²`);

// TAREFA = calcular a área de um quadrado, e de um triângulo
// PESQUISAR a Diferença de var, let e const


function Quadrado () {
    // Quadrado
    var l = prompt(`Insira o valor do lado do Quadrado:`);
    let areaQ = l ** 2;
    window.alert(`A área do Quadrado é ${areaQ}`);
}


function Triangulo () {
    // Triângulo
    var b = prompt(`Insira o valor da Base do Triângulo:`);
    var h = prompt(`Insira o valor da Altura do Triângulo:`);
    let areaT = (b * h)/2;
    window.alert(`A área do Triângulo é ${areaT}`);
}

document.getElementById("body").innerHTML = `<h1>Título</h1> 
<input type="button" value="quadrado" onclick="Quadrado()">
<input type="button" value="Triangulo" onclick="Triangulo()">`;

//aula 07/030/2024

//Tradicional é a normalmente usada em sala;


// //Função anonima
// const Quadrado = function (lado){
//     console.log("Função Quadrado - Função declrada por Expressão/ Anônima");
//     return lado**2;
// }


// //Declaração de 'Arrow Function'(função seta)
// const AreaR = (base, altura) => base*altura;
// let z = AreaR(5, 9); // chamando função seta