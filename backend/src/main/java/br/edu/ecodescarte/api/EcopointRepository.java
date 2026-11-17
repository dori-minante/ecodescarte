package br.edu.ecodescarte.api;

import java.util.List;
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
        return List.of(
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
        );
    }

    private Ecopoint point(String id, String name, String address, String district, String cep, List<String> categories, List<String> materials, String schedule, String restrictions, String notes, boolean acceptsGypsum, String source, String date) {
        return new Ecopoint(id, name, address, district, cep, categories, materials, schedule, restrictions, notes, acceptsGypsum, source, date);
    }
}
