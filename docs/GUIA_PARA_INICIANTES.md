# Guia para iniciantes

## 1. O que é o EcoDescarte?

EcoDescarte é um site para moradores de São Paulo descobrirem uma forma correta de descartar resíduos. A pessoa escolhe o material, informa o CEP ou bairro, vê locais da amostra municipal e abre o mapa com a rota. O site também explica quando um material precisa de logística reversa, como pilhas e celulares.

## 2. Palavras importantes, sem complicação

- **VS Code:** programa usado para abrir e editar a pasta do projeto.
- **Terminal:** área do VS Code onde se digitam comandos, como uma conversa curta com o computador.
- **Git:** histórico local das alterações do projeto. **GitHub** é um site que pode guardar uma cópia desse histórico na internet.
- **Java:** linguagem usada na parte que organiza e entrega os dados. **Spring Boot** facilita criar essa parte. **Maven** baixa bibliotecas Java e executa testes.
- **React:** ferramenta que monta as telas do site. **Vite** inicia e prepara essas telas rapidamente. **Node.js** permite rodar essas ferramentas no computador e **npm** baixa suas bibliotecas.
- **Frontend:** a parte visual que a pessoa vê. **Backend:** a parte que responde com dados. **API:** a ponte pela qual frontend e backend conversam. **JSON:** formato simples de texto usado para transportar esses dados.
- **localhost:** nome do próprio computador. **Porta:** um número que separa serviços no mesmo computador; aqui são 5173 e 8080.
- **Build:** preparação de uma versão pronta para abrir/publicar. **Docker:** opção para empacotar o sistema em um recipiente de software.
- **OpenStreetMap:** mapa livre. **Leaflet:** ferramenta que mostra esse mapa. **ViaCEP:** serviço público que informa bairro a partir de um CEP.

## 3. Como as pastas estão organizadas

Pense nelas como gavetas.

- `frontend/` é a gaveta da aparência: textos, botões e mapas.
- `backend/` é a gaveta que responde dados e consulta o CEP.
- `docs/` é a gaveta dos manuais e das evidências.
- `.vscode/` guarda atalhos de tarefas para o VS Code.
- `README.md` é o resumo técnico; `Dockerfile` descreve como criar o pacote Docker.

## 4. Preparar o computador

1. Abra o **VS Code**. Clique em **File > Open Folder** e escolha a pasta `EcoDescarte`.
2. Clique em **Terminal > New Terminal**. Tudo abaixo deve ser digitado nesse terminal.
3. Digite, um por vez:

```powershell
java --version
node --version
npm --version
git --version
code --list-extensions
```

Os quatro primeiros comandos mostram versões instaladas. O último mostra extensões do VS Code. Espere ver Java 21, Node, npm, Git e extensões como `vscjava.vscode-java-pack`, `vmware.vscode-boot-dev-pack`, `dbaeumer.vscode-eslint` e `esbenp.prettier-vscode`. Se aparecer “comando não reconhecido”, veja Problemas comuns.

## 5. Como iniciar o projeto

**PASSO 1 — abrir o primeiro terminal e iniciar o backend.** Ele cuida dos dados.

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

Espere a mensagem de que o servidor iniciou. Não feche esse terminal.

**PASSO 2 — abrir outro terminal.** No VS Code, clique no sinal `+` da área Terminal. Nele, digite:

```powershell
cd frontend
npm install
npm run dev
```

`npm install` baixa o que a tela precisa; só é necessário novamente se as dependências mudarem. `npm run dev` inicia a tela. O terminal mostrará um endereço local.

**PASSO 3 — abrir o navegador.** Digite exatamente:

```text
http://localhost:5173
```

## 6. Como saber se funciona

Você verá EcoDescarte e a pergunta “O que você precisa descartar?”. Escolha **Móveis**, escreva **Vila Mariana**, clique em buscar, abra um cartão e confira o mapa. Clique em **Como chegar**: uma nova aba de mapas deve abrir.

## 7. Como parar

Volte a cada terminal que está rodando e pressione **Ctrl + C**. Isso apenas para os servidores locais; não apaga arquivos.

## QUERO ABRIR O PROJETO AMANHÃ. O QUE FAÇO?

1. Abra a pasta EcoDescarte no VS Code.
2. Em um terminal, execute `cd backend` e `.\mvnw.cmd spring-boot:run`.
3. Em outro, execute `cd frontend` e `npm run dev`.
4. Abra `http://localhost:5173`.

## 8. Alterações simples e seguras

- Textos e telas: `frontend/src/pages/`.
- Aparência: `frontend/src/styles.css`.
- Dados dos ecopontos: `backend/src/main/java/br/edu/ecodescarte/api/EcopointRepository.java`.
- Orientações: `backend/src/main/java/br/edu/ecodescarte/api/WasteGuideRepository.java`.

Não altere `package-lock.json`, `pom.xml`, `mvnw.cmd` ou a pasta `node_modules` antes da entrega; eles mantêm as ferramentas funcionando.

## 9. Demonstração para o professor

1. Abra e inicie o projeto pelos passos acima.
2. No navegador, selecione **Móveis** ou **Entulho**.
3. Informe **Vila Mariana** ou o CEP `04120-020`.
4. Abra um resultado e mostre endereço, horário e materiais aceitos.
5. Mostre o mapa e clique em **Como chegar**.
6. Mostre a busca de **Celular** para explicar a orientação de logística reversa responsável.

## 10. Problemas comuns

| Como reconhecer | Possível causa | O que fazer |
|---|---|---|
| “comando não reconhecido” | programa não instalado ou terminal antigo | feche e abra o VS Code; instale a ferramenta indicada e teste a versão de novo |
| “porta ocupada” | outro servidor ainda está aberto | use `Ctrl + C` no terminal antigo ou reinicie o VS Code |
| Java não encontrado | JDK 21 ausente | instale Java 21 e reinicie o VS Code |
| Node/npm não encontrado | Node.js LTS ausente | instale Node.js LTS e reinicie o VS Code |
| backend não inicia | comando executado fora de `backend/` | use `cd backend` antes de `.\mvnw.cmd spring-boot:run` |
| frontend não inicia | dependências ausentes | dentro de `frontend/`, rode `npm install` e depois `npm run dev` |
| página não abre | servidor não está ligado | confira os dois terminais e abra a URL exata mostrada pelo Vite |
| mapa não aparece | internet ou serviço de mapas indisponível | confira a conexão; o endereço do ponto continua disponível |
| CEP falha | ViaCEP indisponível ou CEP inválido | informe o bairro manualmente no campo |
| erro de CORS | backend não iniciado ou frontend fora da porta padrão | inicie backend na 8080 e frontend pelo `npm run dev` |
| preciso reiniciar | algum processo parou | pressione Ctrl+C nos dois terminais e repita os passos de início |

## 11. Git e histórico

No terminal, `git log --oneline --graph --decorate --all` mostra uma linha resumida da evolução; `git branch -a` mostra as linhas de trabalho existentes. Eles apenas consultam o histórico, não alteram nada.

## 12. Glossário

**API:** ponte de dados entre programas. **Backend:** parte que processa dados. **Build:** versão preparada para uso. **CEP:** código de endereço. **Docker:** embalagem de software. **Frontend:** parte visível. **Git:** histórico de alterações. **JSON:** texto organizado para dados. **Leaflet:** biblioteca de mapas. **Localhost:** este computador. **Maven:** ferramenta do Java. **npm:** ferramenta de bibliotecas do Node. **OpenStreetMap:** fonte de mapas. **Porta:** número do serviço local. **React:** ferramenta de telas. **Spring Boot:** ferramenta do backend Java. **Terminal:** local para comandos. **ViaCEP:** consulta de CEP. **Vite:** ferramenta que inicia/compila o frontend.
