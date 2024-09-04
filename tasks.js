// Agora, você vai adicionar uma nova tarefa ao objeto tasks.
// Siga estas instruções para criar a nova tarefa:
// 1. Incremente o valor de 'ids' em 1 (de 4 para 5) por exemplo.
// 2. Adicione um novo objeto à array 'tasks' com as seguintes propriedades:
//    - id: deve ser o próximo número após o último id (neste caso, 5)
//    - title: o título da sua nova tarefa
//    - description: uma breve descrição da tarefa
//    - dueDate: a data de vencimento no formato 'YYYY-MM-DD'
//    - completed: true ou false, dependendo se a tarefa está concluída
//    - cardId: o número do card vinculado (use o nome_card gerado anteriormente: SWAT-numero-do-card-copiado)

// Aqui está um exemplo de como o novo objeto deve parecer:

// module.exports = {
//   ids: 5,
//   tasks: [
//     // ... tarefas existentes ...
//     {
//       id: 5,
//       title: "Adicionar nova tarefa ao projeto",
//       description: "Editar o arquivo tasks.js para incluir uma nova tarefa no objeto tasks.",
//       dueDate: "2024-09-04",
//       completed: false,
//       cardId: "SWAT-numero-do-card-copiado"
//     }
//   ]
// };
module.exports = {
  ids: 4,
  tasks: [
    {
      id: 3,
      title: "Participar da minha primeira daily no time SWAT",
      description:
        "Entrar no link da sala da dalily as 9h00 para participar do rito do time.",
      dueDate: "2024-08-20",
      completed: true,
    },
    {
      id: 4,
      title:
        "Clonar repositório de automação do board do time SWAT para inseir novos parâmetros.",
      description: "executar o git clone e fazer alterações no objeto tasks.",
      dueDate: "2024-08-20",
      completed: true,
    },
  ],
};
