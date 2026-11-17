# Continuação do projeto EcoDescarte

Última atualização: 16/11/2026.

## Estado ao encerrar

- O frontend estava em execução na porta `5173`.
- O backend **não** estava em execução na porta `8080`.
- Por isso a página inicial não conseguiu buscar as categorias de resíduo na API e os botões de escolha podem não aparecer.
- O repositório Git está limpo na branch `main`.

## Como voltar a abrir e testar

Abra dois terminais no VS Code, dentro da pasta do projeto.

No primeiro, inicie o backend. Ele entrega os dados dos tipos de resíduo e dos ecopontos:

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

Espere a mensagem com `Tomcat started on port 8080`.

No segundo, inicie o frontend:

```powershell
cd frontend
npm run dev
```

Abra `http://localhost:5173` e atualize a página com `Ctrl + F5`.

Para conferir somente se o backend está respondendo, abra `http://localhost:8080/api/categories`. Deve aparecer uma lista com Entulho, Móveis, Recicláveis, Poda, Eletrônicos, Pilhas e baterias e Óleo de cozinha.

## Próximas prioridades

1. Confirmar que as categorias aparecem quando frontend e backend estão ativos.
2. Fazer uma revisão visual da página inicial: melhorar aparência, hierarquia dos botões de categorias, espaçamentos e linguagem.
3. Testar no navegador a busca por Entulho, Móveis e Recicláveis; os filtros foram corrigidos para reconhecer palavras com acento.
4. Se ainda não houver dados com os dois servidores ativos, abrir o navegador em `http://localhost:8080/api/ecopoints` e registrar a mensagem exibida.
5. Fazer uma revisão manual em celular após os ajustes visuais.

## Decisões já tomadas

- A lista atual é uma amostra verificável de 15 ecopontos municipais. As fontes estão em `docs/FONTES_DADOS.md`.
- Eletrônicos, pilhas, baterias e óleo não foram atribuídos automaticamente a ecopontos porque o recebimento não foi confirmado na fonte usada; a tela deve encaminhar a logística reversa.
- O mapa depende de internet e do OpenStreetMap.

## Arquivos mais importantes para a melhoria visual

- `frontend/src/pages/HomePage.jsx`: conteúdo da tela inicial.
- `frontend/src/components/SearchForm.jsx`: formulário de busca e categorias.
- `frontend/src/components/WasteCategorySelector.jsx`: botões das opções de resíduo.
- `frontend/src/styles.css`: cores, tamanhos, espaços e adaptação a celular.
- `backend/src/main/java/br/edu/ecodescarte/api/EcopointController.java`: API das categorias e dos ecopontos.
