# Fontes dos dados

Data de consulta: **16 de novembro de 2026**. Esta aplicação não cria endereços, horários ou regras por conta própria.

| Instituição/fonte | Endereço | Campos usados | Uso no EcoDescarte |
|---|---|---|---|
| Prefeitura de São Paulo — Subprefeituras | https://prefeitura.sp.gov.br/web/subprefeituras/w/ecoponto-esta%C3%A7%C3%A3o-de-entrega-volunt%C3%A1ria-de-inserv%C3%ADveis | nome, endereço, bairro, CEP, unidades que recebem gesso e horário geral | 15 ecopontos da amostra |
| Prefeitura de São Paulo — SP Mais Limpo | https://prefeitura.sp.gov.br/sp-mais-limpo | materiais aceitos, limites e itens não aceitos | orientações e restrições gerais |
| Prefeitura de São Paulo — Coleta e descartes | https://coleta.prefeitura.sp.gov.br/ | explicação dos ecopontos e consulta por endereço | conferência da finalidade do serviço |
| Mapa Abrecon | https://mapa.abrecon.org.br/ecoponto/lista | nome e endereço de pontos publicados no mapa de descarte | segunda fonte de conferência de endereço; divergências não substituem a confirmação oficial |
| Google Maps | https://www.google.com/maps | busca pública de ecopontos próximos e rota por ruas | botão externo na página de resultados; não utiliza API, chave ou coleta automática de dados |
| ViaCEP | https://viacep.com.br/ | bairro, cidade e UF de um CEP | busca por CEP, sem chave privada |
| OpenStreetMap/Nominatim | https://www.openstreetmap.org/ e https://nominatim.openstreetmap.org/ | mapa e transformação temporária de endereço em posição | mapa no detalhe e ordenação por proximidade; as coordenadas são consultadas sob demanda, respeitando o limite de uma consulta por segundo, e ficam no navegador para reutilização |
| Green Eletron | https://greeneletron.org.br/localizador | localizador de logística reversa | encaminhamento de eletrônicos, pilhas e baterias |

## Critério adotado

Os ecopontos exibidos aceitam entulho de pequenas reformas, móveis, poda e recicláveis conforme as fontes municipais. A página municipal marca separadamente as unidades que recebem gesso; essa marcação foi preservada. A fonte não confirma eletrônicos, pilhas, baterias ou óleo em cada unidade da amostra. Por isso o site não afirma que os ecopontos os recebem e encaminha essas buscas para orientação especializada.

Antes de uma apresentação posterior ou publicação, a lista deve ser conferida novamente na fonte oficial, porque horários e operação podem mudar.

## Ampliação regional e conferência

Em 20 de novembro de 2026, a área Casa Verde/Cachoeirinha foi revista com a lista pública atual da Prefeitura e confrontada com o Mapa Abrecon e a busca pública do Google Maps. Foram incluídos Parque Peruche, Vila Nova Cachoeirinha, Vila Santa Maria, Jardim Antártica e São Leandro. O antigo Ecoponto Casa Verde, na Rua Zanzibar, não foi incluído porque uma relação pública o indica como fechado.
