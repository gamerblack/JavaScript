//Atividade - Calculo de Formas e Volumes declarando a função com os 3 Tipos: Tradicional, Anônima e Seta

//Tradicional

function Volume(){
    let h = prompt("Qual a Altura: ");
    let l = prompt("Qual a Largura: ");
    let c = prompt("Qual o Comprimento: ");
    let v = h * l * c;
    console.log(v );
    window.alert(`O Volume é igual á ${v}`);
}




//Anônima

function Quadrado (){
    
    let lado = prompt("Insira o Lado do quadrado:");

    const AreaQ = function (){
        console.log("Função Quadrado - Função declrada por Expressão/ Anônima");
        return lado**2;
    }
    let q = AreaQ (lado); //chamando a função
    window.alert(`Área é ${q}cm²`);
}



//Seta

function Retangulo (){
    let base = prompt("Qual é a base:");
    let altura = prompt("Qual é a altura:");

    const AreaR = (base, altura) => base*altura;
    let z = AreaR(base, altura);
    window.alert(z);
}


document.getElementById("body").innerHTML = `<h1>Atividade</h1> 
<input type="button" value="Volume" onclick="Volume()">
<input type="button" value="Quadrado" onclick="Quadrado()">
<input type="button" value="Retângulo" onclick="Retangulo()">`;