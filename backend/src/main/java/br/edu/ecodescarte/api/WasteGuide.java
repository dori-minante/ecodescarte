package br.edu.ecodescarte.api;

import java.util.List;

public record WasteGuide(
    String slug, String title, List<String> keywords, String preparation,
    String destination, String warning, String officialReferenceUrl
) {}
