/*
  EXERCÍCIO 03 — SITUAÇÃO DO ALUNO
*/

const nomeAluno = "Aluno Exemplo";
const media = 7.2;

// Defina as faixas de classificação.
// Exemplo:
// Aprovado: média >= ...
// Recuperação: média >= ... e < ...
// Reprovado: média < ...
// TODO:
// Crie uma variável para armazenar a situação final.
let situacaoFinal;
// TODO:
// Utilize if / else if / else para classificar o aluno.
if(media >= 7){
  situacaoFinal = "Aprovado";
} else if( media < 7 && media > 6){
  situacaoFinal = "Recuperação";
} else {
  situacaoFinal = "Reprovado";
}

// TODO:
// Exiba uma mensagem contendo nome, média e situação.
console.log(`\tNome: ${nomeAluno}\n\t Media: ${media}\n\t Situação: ${situacaoFinal}`);
