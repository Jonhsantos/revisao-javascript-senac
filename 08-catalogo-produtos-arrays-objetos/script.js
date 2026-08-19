/*
  EXERCÍCIO 08 — CATÁLOGO DE PRODUTOS
*/

// TODO:
// Crie um array chamado produtos com pelo menos 5 objetos.
//
// Cada produto deve possuir:
// id
// nome
// preco
// categoria
// emEstoque
const produtos = [
  { id: 1, nome: "Notebook", preco: 4200, categoria: "Informática", emEstoque: true },
  { id: 2, nome: "Mouse", preco: 150, categoria: "Acessórios", emEstoque: true },
  { id: 3, nome: "Monitor", preco: 1600, categoria: "Informática", emEstoque: true },
  { id: 4, nome: "Teclado", preco: 300, categoria: "Acessórios", emEstoque: true },
  { id: 5, nome: "Headphone", preco: 350, categoria: "Áudio", emEstoque: false },
];

// TODO:
// Percorra o array com for, for...of ou forEach().
/*
for (produto in produtos){
  console.log(produto);
}

console.log("\n-----\n");

for (const produto of produtos) {
  console.log(produto);
}

console.log("\n-----\n");

produtos.forEach(produto => {
  console.log(produto);
});
*/

// TODO:
// Para cada item, mostre no console uma frase formatada
// contendo as informações do produto.

produtos.forEach(produto =>{
  console.log(`
    ====================================================================
    Nome do Produto: ${produto.nome}\n\t
    Preço R$:${produto.preco.toFixed(2)}\n\t
    Categoria: ${produto.categoria}\n\t
    Disponibilidade: ${produto.emEstoque == true? "Disponivel": "indisponível"}
    ====================================================================\n
    `)
});
