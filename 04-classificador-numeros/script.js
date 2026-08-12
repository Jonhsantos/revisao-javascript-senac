/*
  EXERCÍCIO 04 — CLASSIFICADOR DE NÚMEROS
*/

function classificarNumero(numero) {
  // TODO:
  // Descubra se o número é positivo, negativo ou zero.
if(numero === 0){
  return "Este número é zero";
}

  // TODO:
  // Quando o número não for zero, descubra também se ele é par ou ímpar.
const sinal = numero % 2 === 0 ? "Par" : "Ímpar";
const tipo = numero > 0 ? "positivo" : "negativo";
  // TODO:
  // Retorne uma mensagem com a classificação.
  return `${numero} é ${tipo} e ${sinal}`;
}

// TODO:
// Teste a função com pelo menos cinco valores diferentes.
console.log(classificarNumero(3));
console.log(classificarNumero(2));
console.log(classificarNumero(1));
console.log(classificarNumero(0));
console.log(classificarNumero(-1));