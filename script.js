do{
    let tentativa = 0;
    let palpite;
    let palavra;

    let numero = Math.random();
    numero = (numero * 100) + 1 ;
    numero = Number.parseInt(numero);
    console.log(numero);

    while ((numero != palpite) && (tentativa < 5)){
        palpite = prompt("Digite um número de 0 á 100: ");
        console.log(palpite);
        tentativa = tentativa +1;

        if(numero < palpite){
            window.alert(`O Número era MENOR, Tente novamente`);
        } else if (numero > palpite) {
            window.alert(` O Número era MAIOR, Tente novamente`);
        }
    } 

    if ((numero != palpite) && (tentativa <= 0)){
        window.alert(`Você esgotou suas Tentativas, o número era ${numero}`);
    } else{
        palavra = tentativa == 1?
        "tentativa":"tentativas";
        window.alert(`Parabéns Você acertou Com ${tentativa} ${palavra}!`);
    }

} while(window.confirm("Deseja Jogar Novamente?"));
//o DO...WHILE não fica estranho por ser só uma linha? MAs é assim mesmo, fazer oque!