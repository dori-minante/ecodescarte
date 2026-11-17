# Requisitos e evidências

| Requisito | Status | Evidência | Teste |
|---|---|---|---|
| RF01 Pesquisa por resíduo | PASS | categorias e orientações em `SearchForm` e API | selecionar Entulho, Móveis, Recicláveis, Eletrônicos, Pilhas ou Óleo |
| RF02 CEP ou bairro | PASS | `CepController`, ViaCEP e campo com fallback | testar `04120-020`, CEP inválido e “Vila Mariana” |
| RF03 Lista de locais | PASS | cards com nome, endereço, bairro, horário e categorias | abrir resultados |
| RF04 Detalhes | PASS | rota `/pontos/:id` | abrir Ecoponto Vila Mariana |
| RF05 Orientações | PASS | página `/orientacoes` | abrir menu Orientações |
| RF06 Rota | PASS | botão “Como chegar” | clicar no botão do detalhe |
| RF07 Filtros | PASS | barra de categoria e bairro | filtrar por Gesso e Bela Vista |
| RF08 Sugestão de ponto | FUTURE | fora do MVP deliberadamente | não aplicável |
| RNF01 Usabilidade | PASS | linguagem curta e passo a passo visual | auditoria de jornada no celular |
| RNF02 Acessibilidade | PASS | labels, foco visível, HTML semântico e contraste | navegar com Tab e leitor de tela |
| RNF03 Performance | PASS | dados pequenos e dependências estritamente necessárias | build Vite concluído |
| RNF04 Responsividade | PASS | CSS mobile-first com pontos de quebra | largura de 390 px e desktop |
| RNF05 Privacidade | PASS | não solicita geolocalização nem guarda dados pessoais | inspeção do fluxo |

Todos os requisitos de prioridade alta foram implementados. Para os materiais que não têm recebimento confirmado na amostra municipal, a busca apresenta orientação e link de logística reversa em vez de criar uma indicação falsa.
