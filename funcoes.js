let n = 5;
let n2 = 20;
let pi = Math.PI;

console.log(pi);
let aC = areaCirculo(n);
console.log(`A área é ${n} cm²`);


function areaCirculo (raio = 1) {
    console.log(raio);
    return Math.PI * (raio ** 2);
}

// TAREFA = calcular a área de um quadrado, e de um triângulo
// PESQUISAR a Diferença de var, let e const

var l;
window.alert(`Insira o valor do lado do Quadrado: ${l}`);
