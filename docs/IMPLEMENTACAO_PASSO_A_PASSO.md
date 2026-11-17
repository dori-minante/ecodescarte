# Implementação passo a passo

Este documento registra a construção em ordem cronológica. **Terminal** é a área onde comandos são digitados. **Build** é a preparação de uma versão do site para usar ou publicar.

## Etapa 1 — Preparar o ambiente

**Objetivo:** confirmar que o computador poderia criar o site. **Ferramentas:** Git (histórico), Node/npm (telas), Java 21 (API) e VS Code (editor). **O que foi feito:** foram executados `git --version`, `node --version`, `npm --version`, `java --version` e `code --version`. Também foi usado `code --list-extensions`. **Resultado:** Git 2.56.1, Node 24.15.0, npm 11.12.1, Java 21.0.10 e VS Code 1.146.0 estavam disponíveis; as extensões Java, Spring Boot, ESLint e Prettier já existiam. Não foi necessário instalar programa. **Como verificar:** repita os comandos no terminal.

## Etapa 2 — Organizar o projeto

**Objetivo:** criar uma base limpa e repetível. **Arquivos:** `.gitignore` impede que dependências, resultados de build e informações locais sejam enviados; `.editorconfig` mantém formatação; `.vscode/extensions.json`, `settings.json` e `tasks.json` orientam o VS Code; `Dockerfile` permite empacotar o projeto. **Comandos:** `git init` já havia criado o repositório; `git add` e `git commit -m "chore: initialize project structure"` registraram a base. **Resultado:** estrutura pronta. **Problema:** o Git precisou de permissão de gravação no diretório de histórico; a operação foi autorizada e concluída. **Como verificar:** `git status` não deve listar `AGENTS.md`.

## Etapa 3 — Criar o backend

**Objetivo:** oferecer dados para a tela. **Ferramentas:** Java é a linguagem; Spring Boot transforma classes em serviço web; Maven baixa bibliotecas, compila e testa. **Arquivos:** `backend/pom.xml` lista as bibliotecas; `mvnw.cmd` é o Maven Wrapper, que baixa Maven localmente se necessário; `EcopointController.java` e `WasteGuideController.java` fornecem os endereços da API; repositórios mantêm os dados; `CepController.java` consulta ViaCEP; testes ficam em `src/test`.

**Comandos:** `.\mvnw.cmd test` baixa dependências, compila e executa os testes. **Resultado esperado:** saúde, lista, filtro, detalhe e erro 404 validados. **Problema encontrado:** o código da resposta do ViaCEP usava uma forma de mapa incompatível com Java. **Solução:** foi criada uma pequena função que lê cada valor de forma segura. **Como verificar:** abrir `http://localhost:8080/api/health` após iniciar o backend.

## Etapa 4 — Dados reais e verificáveis

**Objetivo:** apresentar locais sem inventar informação. **O que foi feito:** foi consultada a página oficial de ecopontos da Prefeitura e usada uma amostra de 15 locais, com endereço, bairro, CEP quando publicado, horário geral e indicação oficial de gesso. **Arquivos:** `EcopointRepository.java` e `docs/FONTES_DADOS.md`. **Decisão:** eletrônicos, pilhas/baterias e óleo não foram atribuídos aos ecopontos sem confirmação por unidade; a aplicação mostra orientação e logística reversa. **Como verificar:** compare qualquer cartão com a URL no documento de fontes.

## Etapa 5 — Criar o frontend

**Objetivo:** tornar a jornada simples para uma pessoa usuária. **Ferramentas:** React cria componentes reutilizáveis; Vite inicia e compila a tela; React Router troca de páginas sem recarregar. **Arquivos:** `frontend/src/pages` guarda as quatro páginas; `components` guarda formulário, cartões, filtros e estados de erro; `styles.css` controla o visual responsivo. **Comandos:** `npm install` baixa bibliotecas e `npm run dev` inicia em `http://localhost:5173`.

**Resultado:** página inicial, busca, resultados, detalhes e orientações implementados. **Problema encontrado:** a primeira instalação usou versões incompatíveis de Vite e do plugin React. **Solução:** as versões foram alinhadas no `package.json`; a instalação e o build passaram. **Como verificar:** siga a jornada principal no navegador.

## Etapa 6 — CEP, mapa e rota

**Objetivo:** encontrar locais por região e ajudar a chegar até eles. **O que foi feito:** o formulário aceita CEP com ou sem hífen e envia apenas oito números ao backend. Em caso de falha, pede bairro manual. O mapa é renderizado com Leaflet/OpenStreetMap e localiza o endereço no momento da consulta, sem armazenar coordenadas inventadas. O botão de rota abre Google Maps em outra aba. **Arquivos:** `CepController.java`, `SearchForm.jsx`, `MapView.jsx` e `DetailPage.jsx`. **Como verificar:** teste CEP `04120-020`, depois “Vila Mariana”, e clique em rota.

## Etapa 7 — Acessibilidade e adaptação a celular

**Objetivo:** não exigir conhecimento técnico nem tela grande. **O que foi feito:** labels ligadas aos campos, foco visível, HTML com cabeçalho/conteúdo/rodapé, contrastes fortes, botões grandes e CSS mobile-first. **Arquivos:** componentes do frontend e `styles.css`. **Como verificar:** use a tecla Tab e largura de 390 px nas ferramentas do navegador.

## Etapa 8 — Testes e produção

**Objetivo:** provar que a versão pode ser entregue. **Comandos:** `npm run lint` procura erros de código; `npm run build` gera `dist`; `.\mvnw.cmd test` roda JUnit; `.\mvnw.cmd clean package` gera o JAR. **Resultado:** lint e build do frontend passaram; testes são executados pelo Maven. O Dockerfile possui duas etapas: compila a interface e cria o JAR único. **Como verificar:** usar os comandos da seção Testes do README.

## Etapa 9 — Documentação e próximas melhorias

**Objetivo:** permitir entendimento por pessoa leiga e avaliação acadêmica. **Arquivos:** os documentos em `docs/` explicam fontes, testes, requisitos, versão, roteiro comunitário e demonstração. **Limitações:** a amostra deve ser atualizada periodicamente e mapas/CEP dependem de internet. **Melhorias futuras:** importar a lista municipal completa com processo de revisão, incluir mais pontos de logística reversa confirmados e aplicar teste com participantes reais, sem inventar respostas.
