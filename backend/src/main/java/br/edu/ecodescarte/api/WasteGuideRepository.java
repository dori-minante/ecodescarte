package br.edu.ecodescarte.api;

import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
public class WasteGuideRepository {
    public List<WasteGuide> findAll() {
        String ecopoints = "https://prefeitura.sp.gov.br/sp-mais-limpo";
        return List.of(
            new WasteGuide("entulho", "Entulho de pequena reforma", List.of("entulho", "construção", "tijolo", "cimento", "azulejo"), "Separe materiais perigosos e, quando possível, não misture com lixo comum.", "Leve até 1 m³ por descarga a um ecoponto.", "Telhas de amianto não são aceitas. Verifique o volume antes de sair.", ecopoints),
            new WasteGuide("moveis", "Móveis e objetos grandes", List.of("móvel", "móveis", "sofá", "colchão", "madeira"), "Se puder, desmonte partes soltas e não deixe na calçada.", "Leve ao ecoponto ou consulte o Cata-bagulho da Prefeitura.", "Não descarte junto ao lixo orgânico.", ecopoints),
            new WasteGuide("reciclaveis", "Recicláveis", List.of("reciclável", "papel", "plástico", "metal", "vidro", "embalagem"), "Esvazie e lave embalagens; seque antes de separar.", "Leve a um ecoponto ou utilize a coleta seletiva do seu endereço.", "Vidros quebrados devem estar bem embalados para evitar acidentes.", ecopoints),
            new WasteGuide("podas", "Poda e restos de jardim", List.of("poda", "galho", "jardim", "folha"), "Retire terra e outros resíduos misturados.", "Leve ao ecoponto em pequeno volume.", "Não misture com entulho ou lixo doméstico.", ecopoints),
            new WasteGuide("eletronicos", "Eletrônicos", List.of("eletrônico", "eletronico", "celular", "computador", "notebook", "televisão", "tv"), "Apague dados pessoais de celulares e computadores. Retire pilhas e baterias quando houver orientação do fabricante.", "Procure um ponto de logística reversa especializado, usando o localizador da Green Eletron ou o serviço do fabricante.", "A amostra de ecopontos desta aplicação não confirma recebimento de eletroeletrônicos; não leve sem confirmar.", "https://greeneletron.org.br/localizador"),
            new WasteGuide("pilhas-baterias", "Pilhas e baterias", List.of("pilha", "pilhas", "bateria", "baterias"), "Guarde em recipiente seco, fora do alcance de crianças; não abra nem perfure.", "Entregue em ponto de logística reversa de pilhas e baterias, consultando o localizador da Green Eletron.", "Não descarte no lixo comum nem no ecoponto sem confirmação expressa.", "https://greeneletron.org.br/localizador"),
            new WasteGuide("oleo", "Óleo de cozinha", List.of("óleo", "oleo", "cozinha", "gordura"), "Espere esfriar e coloque em garrafa PET fechada; nunca despeje na pia ou no vaso sanitário.", "Use um ponto de entrega específico para óleo de cozinha ou a orientação da Prefeitura para seu bairro.", "A amostra de ecopontos não confirma o recebimento de óleo.", "https://prefeitura.sp.gov.br/sp-mais-limpo")
        );
    }
}
