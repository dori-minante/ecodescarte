package br.edu.ecodescarte.api;

import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
class EcopointControllerTests {
    @Autowired MockMvc mvc;

    @Test void healthIsAvailable() throws Exception {
        mvc.perform(get("/api/health")).andExpect(status().isOk()).andExpect(jsonPath("$.status").value("ok"));
    }
    @Test void listsEcopoints() throws Exception {
        mvc.perform(get("/api/ecopoints")).andExpect(status().isOk()).andExpect(jsonPath("$", hasSize(20)));
    }
    @Test void filtersByDistrict() throws Exception {
        mvc.perform(get("/api/ecopoints").param("district", "Vila Mariana")).andExpect(status().isOk()).andExpect(jsonPath("$[0].district", containsString("Vila Mariana")));
    }
    @Test void filtersAccentedCategoryBySlug() throws Exception {
        mvc.perform(get("/api/ecopoints").param("category", "moveis")).andExpect(status().isOk()).andExpect(jsonPath("$", hasSize(20)));
    }
    @Test void returnsDetail() throws Exception {
        mvc.perform(get("/api/ecopoints/bresser")).andExpect(status().isOk()).andExpect(jsonPath("$.name").value("Ecoponto Bresser"));
    }
    @Test void returnsFriendlyNotFound() throws Exception {
        mvc.perform(get("/api/ecopoints/inexistente")).andExpect(status().isNotFound()).andExpect(jsonPath("$.message").value("O recurso solicitado não foi encontrado."));
    }
}
