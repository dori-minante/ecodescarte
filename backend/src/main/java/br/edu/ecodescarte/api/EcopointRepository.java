package br.edu.ecodescarte.api;

import java.util.List;
import java.util.stream.Stream;
import org.springframework.stereotype.Repository;

@Repository
public class EcopointRepository {
    public List<Ecopoint> findAll() {
        String source = "https://prefeitura.sp.gov.br/web/subprefeituras/w/ecoponto-esta%C3%A7%C3%A3o-de-entrega-volunt%C3%A1ria-de-inserv%C3%ADveis";
        String date = "2026-11-16";
        String schedule = "Segunda a sábado, 6h às 22h; domingos e feriados, 6h às 18h.";
        String restrictions = "Entrega voluntária e gratuita de pequenos volumes. Entulho: até 1 m³ por descarga. Não leve lixo doméstico orgânico, tintas, solventes, lâmpadas ou telhas de amianto.";
        List<String> common = List.of("entulho", "móveis", "poda", "recicláveis");
        List<String> materials = List.of("Entulho de pequenas reformas", "Móveis e objetos volumosos", "Podas domiciliares", "Papel, plástico, metal e vidro");
        return Stream.concat(List.of(
            point("bresser", "Ecoponto Bresser", "Praça Giuseppe Cesari, nº 54 (Baixo do Viaduto Bresser)", "Brás", "03053-000", common, materials, schedule, restrictions, "Unidade indicada pela Prefeitura; recebe gesso.", true, source, date),
            point("tatuape", "Ecoponto Tatuapé", "Avenida Salim Farah Maluf, nº 179, Praça Tito Lívio Ferreira (Central de Triagem)", "Tatuapé", "03076-000", common, materials, schedule, restrictions, "Unidade indicada pela Prefeitura; recebe gesso.", true, source, date),
            point("glicerio", "Ecoponto Glicério", "Praça Ministro Francisco Sá Carneiro, nº 6 (Baixos do Viaduto Glicério; acesso pela Avenida do Estado, 4434)", "Liberdade", "01517-100", common, materials, schedule, restrictions, "Unidade indicada pela Prefeitura; recebe gesso.", true, source, date),
            point("liberdade", "Ecoponto Liberdade", "Rua Jaceguai, nº 67, esquina com Avenida Liberdade", "Bela Vista", "01315-010", common, materials, schedule, restrictions, "Confira as condições no local antes de levar materiais incomuns.", false, source, date),
            point("bela-vista", "Ecoponto Bela Vista", "Rua Quatorze de Julho, nº 59", "Bela Vista", "01324-040", common, materials, schedule, restrictions, "Unidade indicada pela Prefeitura; recebe gesso.", true, source, date),
            point("vila-mariana", "Ecoponto Vila Mariana", "Rua Mauricio Francisco Klabin, nº 37", "Vila Mariana", "04120-020", common, materials, schedule, restrictions, "Unidade indicada pela Prefeitura; recebe gesso.", true, source, date),
            point("mirandopolis", "Ecoponto Mirandópolis", "Avenida Senador Casemiro da Rocha, nº 1220, esquina com Avenida José Maria Whitaker", "Mirandópolis", "", common, materials, schedule, restrictions, "Unidade indicada pela Prefeitura; recebe gesso.", true, source, date),
            point("politecnica", "Ecoponto Politécnica", "Rua Paulino Baptista Conti, nº 2", "Jardim Sarah", "05382-140", common, materials, schedule, restrictions, "Confira as condições no local antes de levar materiais incomuns.", false, source, date),
            point("jardim-maria-carmo", "Ecoponto Jardim Maria do Carmo", "Rua Caminho do Engenho, nº 800", "Ferreira", "05524-000", common, materials, schedule, restrictions, "Confira as condições no local antes de levar materiais incomuns.", false, source, date),
            point("giovani-gronchi", "Ecoponto Giovani Gronchi", "Avenida Giovani Gronchi, nº 3413", "Morumbi", "05651-002", common, materials, schedule, restrictions, "Confira as condições no local antes de levar materiais incomuns.", false, source, date),
            point("astarte", "Ecoponto Astarte", "Rua Astarte, nº 500", "Vila Carrão", "03446-090", common, materials, schedule, restrictions, "Unidade indicada pela Prefeitura; recebe gesso.", true, source, date),
            point("aricanduva", "Ecoponto Viaduto Engenheiro Alberto Badra", "Avenida Aricanduva, nº 200, Praça Lúcia Mekhitarian", "Aricanduva", "03501-010", common, materials, schedule, restrictions, "Unidade indicada pela Prefeitura; recebe gesso.", true, source, date),
            point("imigrantes", "Ecoponto Imigrantes", "Rua Opixe", "Vila Guarani", "04312-080", common, materials, schedule, restrictions, "Unidade indicada pela Prefeitura; recebe gesso.", true, source, date),
            point("jabaquara", "Ecoponto Jabaquara", "Rua Jupatis, nº 140", "Vila Mira", "04377-200", common, materials, schedule, restrictions, "Unidade indicada pela Prefeitura; recebe gesso.", true, source, date),
            point("vila-guilherme", "Ecoponto Vila Guilherme", "Rua José Bernardo Pinto, nº 1480", "Vila Guilherme", "02055-001", common, materials, schedule, restrictions, "Unidade indicada pela Prefeitura; recebe gesso.", true, source, date)
            ,point("parque-peruche", "Ecoponto Parque Peruche", "Avenida Engenheiro Caetano Álvares, nº 3142", "Parque Peruche", "02535-008", common, materials, schedule, restrictions, "Unidade indicada pela Prefeitura para a região da Casa Verde.", false, source, date)
            ,point("vila-nova-cachoeirinha", "Ecoponto Vila Nova Cachoeirinha", "Rua Felix Alves Pereira, nº 113", "Jardim Centenário", "02882-030", common, materials, schedule, restrictions, "Unidade indicada pela Prefeitura para a região da Casa Verde/Cachoeirinha.", false, source, date)
            ,point("vila-santa-maria", "Ecoponto Vila Santa Maria", "Rua André Bolsena com Travessa Luiz Sá", "Vila Santista", "02560-170", common, materials, schedule, restrictions, "Unidade indicada pela Prefeitura para a região da Casa Verde/Cachoeirinha.", false, source, date)
            ,point("jardim-antartica", "Ecoponto Jardim Antártica", "Rua Dom Aquino, nº 103", "Jardim Antártica", "02652-170", common, materials, schedule, restrictions, "Unidade indicada pela Prefeitura para a região da Casa Verde/Cachoeirinha.", false, source, date)
            ,point("sao-leandro", "Ecoponto São Leandro", "Rua São Leandro, nº 13", "Vila Palmeiras", "02725-010", common, materials, schedule, restrictions, "Unidade indicada pela Prefeitura para a região da Casa Verde/Cachoeirinha.", false, source, date)
        ).stream(), specialPoints().stream()).toList();
    }

    private List<Ecopoint> specialPoints() {
        String oilSource = "https://prefeitura.sp.gov.br/web/sesana/w/confira-os-pontos-de-coleta-de-%C3%B3leo-usado-nos-equipamentos-de-seguran%C3%A7a-alimentar-e-nutricional-da-cidade";
        String electronicsSource = "https://greeneletron.org.br/blog/onde-descartar-pilhas-e-eletronicos-em-sao-paulo-sp/";
        String cityAdemarSource = "https://prefeitura.sp.gov.br/web/cidade_ademar/w/descartesubcidadeademar";
        String ipirangaSource = "https://conselhoparticipativomunicipal.prefeitura.sp.gov.br/web/ipiranga/w/saiba-como-descartar-corretamente-o-lixo-eletronico-no-ipiranga";
        String verifiedAt = "2026-11-21";
        List<String> oil = List.of("oleo");
        List<String> oilMaterials = List.of("Óleo de cozinha usado, em garrafa fechada");
        List<String> electronics = List.of("eletronicos", "pilhas-baterias");
        List<String> electronicsMaterials = List.of("Eletrônicos domésticos de pequeno e médio porte", "Pilhas e baterias portáteis");
        String checkSchedule = "Consulte o horário do equipamento antes de sair.";
        String oilRestriction = "Leve o óleo frio, armazenado em garrafa bem fechada. Não despeje na pia ou no vaso sanitário.";
        String electronicsRestriction = "Confirme no local os limites de tamanho e os itens aceitos antes de sair.";
        return List.of(
            point("oleo-vila-formosa", "Mercado Municipal Antonio Meneghini", "Praça das Canarias, s/n", "Vila Formosa", "", oil, oilMaterials, "Terça a sábado, 8h às 19h; domingo, 8h às 13h.", oilRestriction, "Ponto oficial da campanha Doe seu Óleo Usado.", false, oilSource, verifiedAt),
            point("oleo-sao-miguel", "Mercado Municipal Dr. Américo Sugai", "Avenida Marechal Tito, 567", "São Miguel Paulista", "", oil, oilMaterials, "Segunda a sábado, 9h às 18h.", oilRestriction, "Ponto oficial da campanha Doe seu Óleo Usado.", false, oilSource, verifiedAt),
            point("oleo-guaianases", "Mercado Municipal Leonor Quadros", "Praça Presidente Getulio Vargas, s/n", "Guaianases", "", oil, oilMaterials, "Terça a sábado, 8h30 às 18h; domingo, 8h às 13h.", oilRestriction, "Ponto oficial da campanha Doe seu Óleo Usado.", false, oilSource, verifiedAt),
            point("oleo-sapopemba", "Mercado Municipal Antonio Gomes", "Avenida Sapopemba, 7911", "Sapopemba", "", oil, oilMaterials, "Terça a sábado, 8h às 19h; domingo, 8h às 13h.", oilRestriction, "Ponto oficial da campanha Doe seu Óleo Usado.", false, oilSource, verifiedAt),
            point("oleo-penha", "Mercado Municipal Senador Antonio Emydio de Barros", "Avenida Gabriela Mistral, 160", "Penha", "", oil, oilMaterials, "Terça a sábado, 8h às 19h; domingos e feriados, 8h às 13h.", oilRestriction, "Ponto oficial da campanha Doe seu Óleo Usado.", false, oilSource, verifiedAt),
            point("oleo-pinheiros", "Mercado Municipal de Pinheiros", "Rua Pedro Cristi, 89", "Pinheiros", "", oil, oilMaterials, "Segunda a sábado, 8h às 18h.", oilRestriction, "Ponto oficial da campanha Doe seu Óleo Usado.", false, oilSource, verifiedAt),
            point("oleo-pirituba", "Mercado Municipal de Pirituba", "Rua Almirante Isaías de Noronha, 163", "Pirituba", "", oil, oilMaterials, "Segunda a sábado, 7h às 21h; domingos e feriados, 7h às 18h.", oilRestriction, "Ponto oficial da campanha Doe seu Óleo Usado.", false, oilSource, verifiedAt),
            point("oleo-tucuruvi", "Mercado Municipal Waldemar Costa Filho", "Avenida Nova Cantareira, 1686", "Tucuruvi", "", oil, oilMaterials, "Terça a sábado, 8h às 19h; domingo, 8h às 13h.", oilRestriction, "Ponto oficial da campanha Doe seu Óleo Usado.", false, oilSource, verifiedAt),
            point("oleo-ipiranga", "Mercado Municipal José Gomes de Moraes Neto", "Rua Silva Bueno, 2109", "Ipiranga", "", oil, oilMaterials, "Terça a sábado, 8h às 19h; domingo, 8h às 13h.", oilRestriction, "Ponto oficial da campanha Doe seu Óleo Usado.", false, oilSource, verifiedAt),
            point("oleo-bela-vista", "Sacolão Municipal Bela Vista", "Rua Jaceguai, 557", "Bela Vista", "", oil, oilMaterials, "Segunda a sábado, 7h às 19h; domingos e feriados, 7h às 14h.", oilRestriction, "Ponto oficial da campanha Doe seu Óleo Usado.", false, oilSource, verifiedAt),
            point("oleo-freguesia", "Sacolão Municipal Freguesia do Ó", "Avenida João Paulo I, 2107", "Freguesia do Ó", "", oil, oilMaterials, "Todos os dias, 7h às 19h.", oilRestriction, "Ponto oficial da campanha Doe seu Óleo Usado.", false, oilSource, verifiedAt),
            point("oleo-jaragua", "Sacolão Municipal Estrada do Sabão", "Estrada do Sabão, 806", "Brasilândia", "", oil, oilMaterials, "Todos os dias, 7h às 19h.", oilRestriction, "Ponto oficial da campanha Doe seu Óleo Usado.", false, oilSource, verifiedAt),
            point("eletronicos-cidade-ademar", "Subprefeitura Cidade Ademar", "Avenida Yervant Kissajikian, 416", "Vila Constância", "04657-000", List.of("eletronicos"), List.of("Eletrônicos de pequeno porte, cabos e acessórios"), "Segunda a sexta-feira, 8h às 17h.", "Não recebe geladeiras, ar-condicionado, TVs/monitores de tubo, lâmpadas ou baterias inchadas/danificadas.", "Caixa permanente de coleta em parceria com a Coopermiti.", false, cityAdemarSource, "2026-08-18"),
            point("eletronicos-ipiranga", "Subprefeitura do Ipiranga", "Rua Lino Coutinho, 444", "Ipiranga", "", List.of("eletronicos"), List.of("Celulares, computadores, TVs, monitores, impressoras, cabos e pequenos eletrodomésticos"), checkSchedule, electronicsRestriction, "Ponto de coleta informado pela Subprefeitura do Ipiranga.", false, ipirangaSource, verifiedAt),
            point("eletronicos-viaduto-cha", "Ponto de entrega Viaduto do Chá", "Viaduto do Chá, 15", "Centro", "01002-020", electronics, electronicsMaterials, checkSchedule, electronicsRestriction, "Ponto listado pela Green Eletron para eletrônicos, pilhas e baterias portáteis.", false, electronicsSource, verifiedAt),
            point("eletronicos-butanta", "Casas Bahia Butantã Shopping", "Avenida Professor Francisco Morato, 2718", "Butantã", "05512-300", electronics, electronicsMaterials, checkSchedule, electronicsRestriction, "Ponto listado pela Green Eletron para eletrônicos, pilhas e baterias portáteis.", false, electronicsSource, verifiedAt),
            point("eletronicos-santa-cruz", "Casas Bahia Shopping Metrô Santa Cruz", "Rua Domingos de Morais, 2564", "Vila Mariana", "04036-100", electronics, electronicsMaterials, checkSchedule, electronicsRestriction, "Ponto listado pela Green Eletron para eletrônicos, pilhas e baterias portáteis.", false, electronicsSource, verifiedAt),
            point("eletronicos-trianon", "Ponto de entrega Parque Trianon", "Rua Peixoto Gomide, 949", "Jardim Paulista", "01409-001", electronics, electronicsMaterials, checkSchedule, electronicsRestriction, "Ponto listado pela Green Eletron para eletrônicos, pilhas e baterias portáteis.", false, electronicsSource, verifiedAt),
            point("eletronicos-morumbi", "Fast Shop Morumbi Shopping", "Avenida Roque Petroni Júnior, 1089", "Morumbi", "04707-900", electronics, electronicsMaterials, checkSchedule, electronicsRestriction, "Ponto listado pela Green Eletron para eletrônicos, pilhas e baterias portáteis.", false, electronicsSource, verifiedAt),
            point("eletronicos-tatuape", "Fast Shop Shopping Boulevard Tatuapé", "Rua Gonçalves Crespo, 78", "Tatuapé", "03066-030", electronics, electronicsMaterials, checkSchedule, electronicsRestriction, "Ponto listado pela Green Eletron para eletrônicos, pilhas e baterias portáteis.", false, electronicsSource, verifiedAt),
            point("eletronicos-lar-center", "Fast Shop Lar Center", "Avenida Otto Baumgart, 500", "Vila Guilherme", "02049-000", electronics, electronicsMaterials, checkSchedule, electronicsRestriction, "Ponto listado pela Green Eletron para eletrônicos, pilhas e baterias portáteis.", false, electronicsSource, verifiedAt),
            point("eletronicos-jabaquara", "Rodoviária Jabaquara", "Rua dos Jequitibás, 0", "Jabaquara", "", electronics, electronicsMaterials, checkSchedule, electronicsRestriction, "Ponto listado pela Green Eletron para eletrônicos, pilhas e baterias portáteis.", false, electronicsSource, verifiedAt),
            point("eletronicos-barra-funda", "Rodoviária Barra Funda", "Rua Jornalista Aloysio Biondi, 0", "Barra Funda", "", electronics, electronicsMaterials, checkSchedule, electronicsRestriction, "Ponto listado pela Green Eletron para eletrônicos, pilhas e baterias portáteis.", false, electronicsSource, verifiedAt)
        );
    }

    private Ecopoint point(String id, String name, String address, String district, String cep, List<String> categories, List<String> materials, String schedule, String restrictions, String notes, boolean acceptsGypsum, String source, String date) {
        return new Ecopoint(id, name, address, district, cep, categories, materials, schedule, restrictions, notes, acceptsGypsum, source, date);
    }
}
