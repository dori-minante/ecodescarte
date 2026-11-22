# EcoDescarte

EcoDescarte é uma plataforma acadêmica para ajudar moradores de São Paulo a encontrar orientações simples e ecopontos municipais para o descarte correto de resíduos. O foco é a jornada: escolher o resíduo, informar CEP ou bairro, conferir o local e abrir a rota.

## Tecnologias

- **Frontend:** React, Vite, React Router, Leaflet e OpenStreetMap.
- **Backend:** Java 21, Spring Boot e Maven Wrapper.
- **Dados:** amostra versionada de 15 ecopontos da Prefeitura de São Paulo; não há banco de dados nem cadastro de usuário.

## Estrutura

- `frontend/`: telas que aparecem no navegador.
- `backend/`: API, dados e testes.
- `docs/`: guias de execução, fontes, requisitos e validação.
- `.vscode/`: tarefas recomendadas para o VS Code.

## Início rápido

Abra dois terminais no VS Code.

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

```powershell
cd frontend
npm install
npm run dev
```

Abra `http://localhost:5173`. A API fica em `http://localhost:8080/api/health`.

Para instruções detalhadas e explicadas para iniciantes, leia [docs/GUIA_PARA_INICIANTES.md](docs/GUIA_PARA_INICIANTES.md).

## Testes e build

```powershell
cd frontend
npm run lint
npm run build
cd ..\backend
.\mvnw.cmd test
```

Para preparar o JAR com a interface embutida, gere o frontend, copie `frontend/dist` para `backend/src/main/resources/static` e rode:

```powershell
.\mvnw.cmd clean package
java -jar target\ecodescarte-1.0.0.jar
```

O Dockerfile faz essas etapas automaticamente:

```powershell
docker build -t ecodescarte .
docker run --rm -p 8080:8080 ecodescarte
```

## Hospedagem gratuita

O projeto tem duas partes: o **frontend** (React/Vite, estático) e a **API** (Spring Boot). A API não roda na Vercel, então existem dois caminhos.

### Opção A — Tudo em um host só (recomendado)

O `Dockerfile` gera um único JAR com o frontend embutido. Hospede-o em um serviço gratuito que aceite Docker, como **Render** ou **Railway**:

1. Publique o repositório no GitHub.
2. No Render, crie um *Web Service* a partir do repositório (o arquivo `render.yaml` já deixa isso pronto).
3. O Render detecta o `Dockerfile`, faz o build e publica em `https://seu-app.onrender.com`.

Nessa opção, frontend e API ficam no mesmo endereço e nada mais precisa ser configurado (o `/api` já funciona).

### Opção B — Frontend na Vercel + API em outro host

1. **API**: publique o backend no Render/Railway (mesmo passo acima, apenas com a API).
2. **Frontend**: na Vercel, importe a pasta `frontend/`, defina o build `npm run build` e o diretório de saída `dist`. Configure a variável de ambiente `VITE_API_BASE_URL` apontando para a URL da API (ex.: `https://seu-backend.onrender.com`).

O `frontend/vercel.json` já configura o redirecionamento SPA (rotas do React Router), e o backend já tem CORS habilitado para aceitar chamadas de outro domínio.

## Limitações conscientes

A amostra contém 15 dos ecopontos municipais e deve ser atualizada a partir da fonte oficial antes de uso operacional. Eletrônicos, pilhas, baterias e óleo são encaminhados para orientação/logística reversa, pois a lista municipal usada não confirma que os ecopontos da amostra recebam esses materiais. A geocodificação do mapa depende do OpenStreetMap e da conexão com a internet.
