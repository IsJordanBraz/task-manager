# TaskManager

- # sonarqube
- para utilizar o sonarqube para verificar a qualidade do codigo e coverage.
- 1. rodar o docker compose.
- 4. Entrar em http://localhost:9000 e colocar o user "admin" password "admin" pela primeira vez
vai aparecer uma tela para alterar a senha, altere a senha para "sonar".
- 2. gerar os tests da karma e jasmine com "npm run coverage"
- 3. rode sonarqube com "npm run sonar"
- 5. Ir na aba de projetos e clicar em task-manager.

- # TODO CRUD

- [ ] - Exibir uma lista de tarefas cadastradas
  - title, description, status(done, pending).
  - Pagination.
- [ ] - Criação de tarefas.
  - criar uma tarefa.
  - solicitar titulo, descrição
  - definir status default como pending.
- [ ] - Editar tarefas
  - Editar detalhes de uma tarefa existente.
  - Alteração de titulo, descrição e status.
- [ ] - Excluir tarefa existente.

- # Style
- [ ] - Angular material ou bootstrap 5.

- # Testing cases
- [ ] - testing app.
