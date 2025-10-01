package com.depresion.phq9app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@RequestMapping("/api/phq9")
@CrossOrigin // permite que el HTML pueda hacer fetch desde otro dominio
public class Phq9Controller {

    @Autowired
    private ResultadoRepository repo;

    // Guardar un resultado enviado desde el frontend
    @PostMapping
    public ResponseEntity<?> guardarResultado(@RequestBody ResultadoDTO dto) {
        Resultado r = new Resultado();
        r.setPuntaje(dto.getScore());
        r.setSeveridad(dto.getSeverity());
        r.setRespuestas(dto.getAnswers().toString());
        repo.save(r);
        return ResponseEntity.ok("Resultado guardado correctamente");
    }

    // Obtener todos los resultados guardados (ejemplo)
    @GetMapping
    public List<Resultado> listarResultados() {
        return repo.findAll();
    }

    // DTO interno para recibir datos del frontend
    public static record ResultadoDTO(int score, String severity, List<Integer> answers) {}
}
