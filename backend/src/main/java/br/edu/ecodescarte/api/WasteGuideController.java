package br.edu.ecodescarte.api;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/waste-guides")
public class WasteGuideController {
    private final WasteGuideRepository repository;

    WasteGuideController(WasteGuideRepository repository) { this.repository = repository; }

    @GetMapping
    public List<WasteGuide> all() { return repository.findAll(); }

    @GetMapping("/{slug}")
    public WasteGuide one(@PathVariable String slug) {
        return repository.findAll().stream().filter(guide -> guide.slug().equals(slug)).findFirst().orElseThrow(GuideNotFoundException::new);
    }
}
