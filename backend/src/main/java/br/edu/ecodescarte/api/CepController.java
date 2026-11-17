package br.edu.ecodescarte.api;

import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

@RestController
@RequestMapping("/api/location")
public class CepController {
    private final RestClient client = RestClient.create();

    @GetMapping("/cep/{cep}")
    public ResponseEntity<?> cep(@PathVariable String cep) {
        String sanitized = cep.replaceAll("\\D", "");
        if (sanitized.length() != 8) throw new IllegalArgumentException("Digite um CEP com 8 números ou informe o bairro.");
        try {
            Map<?, ?> response = client.get().uri("https://viacep.com.br/ws/{cep}/json/", sanitized).retrieve().body(Map.class);
            if (response == null || Boolean.TRUE.equals(response.get("erro"))) return ResponseEntity.notFound().build();
            return ResponseEntity.ok(Map.of(
                "cep", response.getOrDefault("cep", sanitized),
                "district", response.getOrDefault("bairro", ""),
                "city", response.getOrDefault("localidade", ""),
                "state", response.getOrDefault("uf", "")
            ));
        } catch (Exception exception) {
            return ResponseEntity.status(503).body(Map.of("message", "Não foi possível consultar o CEP agora. Tente novamente ou informe o bairro."));
        }
    }
}
