/*
  EXERCÍCIO 02 — CALCULADORA DE MÉDIA
*/

const nomeAluno = "Aluno Exemplo";

// TODO:
// Crie quatro variáveis/constantes para armazenar as notas.
const n1 = 8;
const n2 = 7;
const n3 = 9;
const n4 = 6;

// TODO:
// Calcule a soma das quatro notas.
const somaDasNotas = n1 + n2 + n3 + n4;

// TODO:
// Calcule a média aritmética.
const media = somaDasNotas / 4;

// TODO:
// Exiba no console:
// Nome do aluno
// Notas
// Média final
console.log(`Nome do aluno: ${nomeAluno}\n
Notas: ${n1}, ${n2}, ${n3}, ${n4}\n
Média Final: ${media.toFixed(2)}\n`
);

if(media >= 7){
  console.log("Aluno Aprovado\n");
} else {
  console.log("Aluno Reprovado\n");
}
// DESAFIO:
// Formate a média com duas casas decimais.
