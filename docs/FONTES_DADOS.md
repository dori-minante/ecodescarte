# Fontes dos dados

Data de consulta inicial: **16 de novembro de 2026**. Esta aplicação não cria endereços, horários ou regras por conta própria.

## Complemento de pontos específicos — acesso em 21 de novembro de 2026

| Instituição/fonte | Endereço | Campos usados | Uso no EcoDescarte |
|---|---|---|---|
| Prefeitura de São Paulo — SESANA | https://prefeitura.sp.gov.br/web/sesana/w/confira-os-pontos-de-coleta-de-%C3%B3leo-usado-nos-equipamentos-de-seguran%C3%A7a-alimentar-e-nutricional-da-cidade | nome, endereço, bairro e horário dos pontos de óleo | pontos para óleo de cozinha usado |
| Prefeitura de São Paulo — Cidade Ademar | https://prefeitura.sp.gov.br/web/cidade_ademar/w/descartesubcidadeademar | endereço, horário, itens aceitos e restrições | ponto para eletrônicos de pequeno porte |
| Prefeitura de São Paulo — Ipiranga | https://conselhoparticipativomunicipal.prefeitura.sp.gov.br/web/ipiranga/w/saiba-como-descartar-corretamente-o-lixo-eletronico-no-ipiranga | endereço e materiais aceitos | ponto para eletrônicos |
| Green Eletron | https://greeneletron.org.br/blog/onde-descartar-pilhas-e-eletronicos-em-sao-paulo-sp/ | endereços de PEVs de eletrônicos, pilhas e baterias | pontos para eletrônicos, pilhas e baterias; a fonte aparece somente nos detalhes e não há redirecionamento automático |

| Instituição/fonte | Endereço | Campos usados | Uso no EcoDescarte |
|---|---|---|---|
| Prefeitura de São Paulo — Subprefeituras | https://prefeitura.sp.gov.br/web/subprefeituras/w/ecoponto-esta%C3%A7%C3%A3o-de-entrega-volunt%C3%A1ria-de-inserv%C3%ADveis | nome, endereço, bairro, CEP, unidades que recebem gesso e horário geral | 15 ecopontos da amostra |
| Prefeitura de São Paulo — SP Mais Limpo | https://prefeitura.sp.gov.br/sp-mais-limpo | materiais aceitos, limites e itens não aceitos | orientações e restrições gerais |
| Prefeitura de São Paulo — Coleta e descartes | https://coleta.prefeitura.sp.gov.br/ | explicação dos ecopontos e consulta por endereço | conferência da finalidade do serviço |
| Mapa Abrecon | https://mapa.abrecon.org.br/ecoponto/lista | nome e endereço de pontos publicados no mapa de descarte | segunda fonte de conferência de endereço; divergências não substituem a confirmação oficial |
| Google Maps | https://www.google.com/maps | busca pública de ecopontos próximos e rota por ruas | botão externo na página de resultados; não utiliza API, chave ou coleta automática de dados |
| GeoSampa — camada WFS Ecoponto | https://metadados.geosampa.prefeitura.sp.gov.br/geonetwork/intranet/api/records/ab117be9-ad7f-41a2-a3ee-cba5709d04b2 | nome, localização cartográfica e coordenadas da camada pública | carregamento dinâmico dos ecopontos na página de resultados, com fallback para a base local |
| ViaCEP | https://viacep.com.br/ | bairro, cidade e UF de um CEP | busca por CEP, sem chave privada |
| OpenStreetMap/Nominatim | https://www.openstreetmap.org/ e https://nominatim.openstreetmap.org/ | mapa e transformação temporária de endereço em posição | mapa no detalhe; as coordenadas são consultadas sob demanda, respeitando o limite de uma consulta por segundo, e ficam no navegador para reutilização |

## Critério adotado

Os ecopontos exibidos aceitam entulho de pequenas reformas, móveis, poda e recicláveis conforme as fontes municipais. A página municipal marca separadamente as unidades que recebem gesso; essa marcação foi preservada. Óleo, eletrônicos, pilhas e baterias são apresentados somente em pontos específicos, com sua própria fonte e sem afirmar que ecopontos municipais os recebem.

Antes de uma apresentação posterior ou publicação, a lista deve ser conferida novamente na fonte oficial, porque horários e operação podem mudar.

## Ampliação regional e conferência

Em 20 de novembro de 2026, a área Casa Verde/Cachoeirinha foi revista com a lista pública atual da Prefeitura e confrontada com o Mapa Abrecon e a busca pública do Google Maps. Foram incluídos Parque Peruche, Vila Nova Cachoeirinha, Vila Santa Maria, Jardim Antártica e São Leandro. O antigo Ecoponto Casa Verde, na Rua Zanzibar, não foi incluído porque uma relação pública o indica como fechado.
