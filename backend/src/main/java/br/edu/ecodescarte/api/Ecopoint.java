package br.edu.ecodescarte.api;

import java.util.List;

public record Ecopoint(
    String id, String name, String address, String district, String cep,
    List<String> categories, List<String> acceptedMaterials, String schedule,
    String restrictions, String notes, boolean acceptsGypsum, String sourceUrl,
    String verifiedAt
) {}
