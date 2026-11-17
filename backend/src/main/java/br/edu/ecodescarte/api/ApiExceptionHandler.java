package br.edu.ecodescarte.api;

import java.time.Instant;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.resource.NoResourceFoundException;

@RestControllerAdvice
public class ApiExceptionHandler {
    @ExceptionHandler({NoResourceFoundException.class, EcopointNotFoundException.class, GuideNotFoundException.class})
    ResponseEntity<Map<String, Object>> notFound(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of(
            "status", 404,
            "message", "O recurso solicitado não foi encontrado.",
            "timestamp", Instant.now().toString()
        ));
    }

    @ExceptionHandler(IllegalArgumentException.class)
    ResponseEntity<Map<String, Object>> invalidRequest(IllegalArgumentException exception) {
        return ResponseEntity.badRequest().body(Map.of(
            "status", 400,
            "message", exception.getMessage(),
            "timestamp", Instant.now().toString()
        ));
    }
}
