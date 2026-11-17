# Testes e validação

## Testes automatizados executados

| Comando | Resultado esperado | Resultado |
|---|---|---|
| `npm run lint` em `frontend/` | nenhum erro de código | PASS |
| `npm run build` em `frontend/` | pasta `dist/` criada | PASS |
| `.\mvnw.cmd test` em `backend/` | testes JUnit verdes | PASS |
| `.\mvnw.cmd clean package` | JAR criado | PASS — 6 testes passaram e JAR foi gerado |

Os testes JUnit cobrem saúde da API, listagem de 15 locais, filtro de bairro, detalhe e resposta 404 amigável.

## Roteiro de teste manual

1. Inicie backend e frontend.
2. Abra `http://localhost:5173` e confirme a pergunta “O que você precisa descartar?”.
3. Escolha **Móveis**, digite **Vila Mariana** e clique em buscar.
4. Abra o resultado, confira horário, materiais e mapa.
5. Clique em **Como chegar** e confirme que outra aba do serviço de mapas abre.
6. Volte, escolha **Eletrônicos** e confira o aviso de logística reversa; não deve haver promessa de recebimento pelo ecoponto.
7. Teste o CEP `04120-020` e um CEP incompleto, como `123`.
8. Atualize a página de detalhes para conferir a rota da aplicação única.
9. No navegador, simule tela de 390 px e confira que botões e textos permanecem legíveis.

## Problemas conhecidos e tratamento

- O mapa depende de internet e do OpenStreetMap. Quando a localização não responde, o endereço continua visível e há uma mensagem clara.
- O ViaCEP pode ficar indisponível. Nesse caso a página pede que a pessoa digite o bairro, sem interromper o site.
- A amostra é de 15 pontos; a Prefeitura possui mais unidades. O documento de fontes explica como atualizar.
