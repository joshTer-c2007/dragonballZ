package com.depresion.phq9app;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Resultado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int puntaje;
    private String severidad;

    @Lob
    private String respuestas; // Guardamos todas las respuestas en JSON

    private LocalDateTime fecha = LocalDateTime.now();

    // Getters y Setters
    public Long getId() { return id; }
    public int getPuntaje() { return puntaje; }
    public void setPuntaje(int puntaje) { this.puntaje = puntaje; }
    public String getSeveridad() { return severidad; }
    public void setSeveridad(String severidad) { this.severidad = severidad; }
    public String getRespuestas() { return respuestas; }
    public void setRespuestas(String respuestas) { this.respuestas = respuestas; }
    public LocalDateTime getFecha() { return fecha; }
}
