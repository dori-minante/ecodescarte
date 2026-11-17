package br.edu.ecodescarte.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/** Permite atualizar uma rota do React em produção sem receber página 404. */
@Controller
public class SpaForwardController {
    @GetMapping({"/", "/resultados", "/orientacoes", "/pontos/{id:[a-z0-9-]+}"})
    public String forwardToIndex() {
        return "forward:/index.html";
    }
}
