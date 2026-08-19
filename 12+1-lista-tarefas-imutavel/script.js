/*
  EXERCÍCIO 12+1 — LISTA DE TAREFAS IMUTÁVEL
*/

const tarefas = [
  { id: 1, titulo: "Estudar JavaScript", concluida: false },
  { id: 2, titulo: "Praticar arrays", concluida: false },
  { id: 3, titulo: "Revisar funções", concluida: true },
];

function adicionarTarefa(lista, novaTarefa) {
  // TODO:
  // Retorne um NOVO array incluindo novaTarefa.
  // const tarefasAtualizadas = [...lista,
  //    { id: lista.length + 1, titulo: novaTarefa, concluida: false }];
  // return tarefasAtualizadas
  return [...lista, { id: lista.length + 1, titulo: novaTarefa, concluida: false }];
}

function concluirTarefa(lista, id) {
  // TODO:
  // Retorne um NOVO array.
  // Altere apenas a tarefa correspondente ao id.
  return lista.map(tarefa => {
    if (tarefa.id === id) {
      return { ...tarefa, concluida: true };
    }
    return tarefa;
  });
}

function removerTarefa(lista, id) {
  // TODO:
  // Retorne um NOVO array sem a tarefa informada.
  return lista.filter(tarefa => tarefa.id !== id);
}

// TODO:
// Teste as três funções sem alterar diretamente tarefas.

console.log(JSON.stringify(adicionarTarefa(tarefas, "Fazer arroz"), null, 2));
console.log("=====================================\n");
console.log(JSON.stringify(concluirTarefa(tarefas, 1), null, 2));
console.log("=====================================\n");
console.log(JSON.stringify(removerTarefa(tarefas, 2), null, 2));


