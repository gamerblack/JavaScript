
const aluno = {
    nome: "Ana",
    Idade: 14,
    notas:[4.5, 7.8, 6.2],
    media: 'N',
    CalcMedia: function(){
        let media = 0;
        for(let i = 0; i < this.notas.length; i++){
            media += this.notas[i];
        }
        media /= this.notas.length;
        this.media = media;       
    },

}

aluno.CalcMedia();
console.log(aluno.media);

aluno.notas.push(8.0);
aluno.CalcMedia();                                                                                                                           
console.log(aluno.media);


const dadosAluno = require("./aluno.json");
console.log(dadosAluno);
