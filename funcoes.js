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

let opcao = window.confirm("Confirme para Calcular a Àrea do Quadrado ou Recuse para seguir ao Calculo da Àrea do Triangulo.");

if  (opcao){
    function Quadrado () {
        // Quadrado
        var l = prompt(`Insira o valor do lado do Quadrado:`);
        let areaQ = l ** 2;
        window.alert(`A área do Quadrado é ${areaQ}`);
    }
}else {
    function Triangulo () {
        // Triângulo
        var b = prompt(`Insira o valor da Base do Triângulo:`);
        var h = prompt(`Insira o valor da Altura do Triângulo:`);
        let areaT = (b * h)/2;
        window.alert(`A área do Triângulo é ${areaT}`);
    }
}

opcao = window.confirm("Deseja Calcular a Área do Triângo?");

if (opcao){
    // Triângulo
    var b = prompt(`Insira o valor da Base do Triângulo:`);
    var h = prompt(`Insira o valor da Altura do Triângulo:`);
    let areaT = (b * h)/2;
    window.alert(`A área do Triângulo é ${areaT}`);
    window.alert(`Tarefa Concluída`);
}else {
    window.alert(`Tarefa Concluída`);
}
