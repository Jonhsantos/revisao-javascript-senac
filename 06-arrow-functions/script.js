/*
  EXERCÍCIO 06 — ARROW FUNCTIONS
*/

// TODO:
// Reescreva as funções abaixo utilizando arrow functions.

// function somar(a, b) {
//   return a + b;
// }

const somar = (a, b) => a + b;

//========================================================

// function subtrair(a, b) {
//   return a - b;
// }

const subitrair = (a, b) => a - b;

//========================================================

// function multiplicar(a, b) {
//   return a * b;
// }

const multiplicar = (a, b) => a * b;
//========================================================

// function dividir(a, b) {
//   if (b === 0) {
//     return "Não é possível dividir por zero";
//   }
//   return a / b;
// }

const dividir =(a, b) => a == 0 || b == 0 ? "não é possível dividir por zero" : a / b;

// TODO:
// Identifique quais funções podem utilizar retorno implícito.

// TODO:
// Crie uma arrow function calcular() mantendo o comportamento do exercício anterior.

console.log(dividir(13, 0))