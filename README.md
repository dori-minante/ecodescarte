# EcoDescarte

Plataforma digital para orientar o descarte correto de resíduos sólidos na cidade de São Paulo. O EcoDescarte ajuda a população a encontrar ecopontos públicos e a saber como descartar corretamente móveis, entulho, eletrônicos, recicláveis, gesso, pilhas e óleo de cozinha.

## Funcionalidades

- Busca por tipo de resíduo (8 categorias)
- Busca por CEP e por bairro
- Lista de ecopontos com endereço e horário de funcionamento
- Página de detalhes com resíduos aceitos, restrições e rota no mapa
- Orientações de descarte ("Como descartar")
- Seção Cata-Bagulho (coleta gratuita da Prefeitura)
- Layout responsivo (celular, tablet e desktop)

## Tecnologias

- **Front-end:** React 19, Vite 7, React Router 7, Leaflet (mapas)
- **Back-end:** Java 21, Spring Boot 3.4, Maven
- **Dados e mapas:** ViaCEP, GeoSampa, OpenStreetMap/Nominatim

## Como executar

### Front-end

```bash
cd frontend
npm install
npm run dev
```

### Back-end

```bash
cd backend
./mvnw spring-boot:run
```

## Implantação

O projeto é empacotado em um único container Docker: o back-end Spring Boot compila o front-end e serve a aplicação completa. O deploy é feito no Render a partir do arquivo `render.yaml`.

## Acesso

Disponível em: https://ecodescarte-d06v.onrender.com/
