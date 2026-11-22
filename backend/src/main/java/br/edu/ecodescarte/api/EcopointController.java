package br.edu.ecodescarte.api;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class EcopointController {
    private static final String GEOSAMPA_WFS_URL = "https://wfs.geosampa.prefeitura.sp.gov.br/geoserver/geoportal/wfs?service=WFS&version=2.0.0&request=GetFeature&typeNames=geoportal:ecoponto&outputFormat=application/json&srsName=EPSG:4326";
    private final EcopointRepository repository;
    private final HttpClient httpClient = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();

    EcopointController(EcopointRepository repository) { this.repository = repository; }

    @GetMapping("/health")
    public Health health() { return new Health("ok", "EcoDescarte API disponível"); }

    @GetMapping("/categories")
    public List<Category> categories() {
        return List.of(
            new Category("entulho", "Entulho", "Restos de pequenas reformas"),
            new Category("moveis", "Móveis", "Sofá, colchão e objetos grandes"),
            new Category("reciclaveis", "Recicláveis", "Papel, plástico, metal e vidro"),
            new Category("podas", "Poda", "Galhos e restos de jardim"),
            new Category("gesso", "Gesso", "Placas e restos de drywall"),
            new Category("eletronicos", "Eletrônicos", "Celular, computador e TV"),
            new Category("pilhas-baterias", "Pilhas e baterias", "Descarte especializado"),
            new Category("oleo", "Óleo de cozinha", "Garrafas fechadas em ponto específico")
        );
    }

    @GetMapping("/ecopoints")
    public List<Ecopoint> ecopoints(@RequestParam(required = false) String category, @RequestParam(required = false) String district, @RequestParam(required = false) String search) {
        return repository.findAll().stream()
            .filter(point -> category == null || category.isBlank() || matchesCategory(point, category))
            .filter(point -> district == null || district.isBlank() || normalized(point.district() + " " + point.address() + " " + point.name()).contains(normalized(district)))
            .filter(point -> search == null || search.isBlank() || normalized(point.name() + " " + point.address() + " " + point.district()).contains(normalized(search)))
            .sorted(Comparator.comparing(Ecopoint::name))
            .toList();
    }

    @GetMapping(value = "/geosampa/ecopoints", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> geoSampaEcopoints() {
        try {
            var request = HttpRequest.newBuilder(URI.create(GEOSAMPA_WFS_URL))
                .header("Accept", MediaType.APPLICATION_JSON_VALUE)
                .header("User-Agent", "EcoDescarte/1.0 (projeto acadêmico)")
                .timeout(Duration.ofSeconds(15))
                .GET()
                .build();
            var response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            return ResponseEntity.status(response.statusCode()).contentType(MediaType.APPLICATION_JSON).body(response.body());
        } catch (Exception exception) {
            return ResponseEntity.status(503).contentType(MediaType.APPLICATION_JSON)
                .body("{\"message\":\"A camada pública do GeoSampa não está disponível agora.\"}");
        }
    }

    @GetMapping("/ecopoints/{id}")
    public Ecopoint detail(@PathVariable String id) {
        return repository.findAll().stream().filter(point -> point.id().equals(id)).findFirst().orElseThrow(EcopointNotFoundException::new);
    }

    private boolean matchesCategory(Ecopoint point, String category) {
        if (category.equals("gesso")) return point.acceptsGypsum();
        if (category.equals("podas")) return point.categories().stream().anyMatch(item -> normalized(item).equals("poda"));
        return point.categories().stream().anyMatch(item -> normalized(item).equals(normalized(category)));
    }

    private String normalized(String value) {
        return java.text.Normalizer.normalize(value.toLowerCase(Locale.ROOT), java.text.Normalizer.Form.NFD).replaceAll("\\p{M}", "");
    }

    public record Health(String status, String message) {}
    public record Category(String slug, String title, String description) {}
}
