package com.baufest.tennis.springtennis.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Curso")

public class Curso {
    @Id
    @Column
    private int id;

    @Column
    private String nombre;

    @ManyToMany(mappedBy = "cursos")
    private List<Estudiante> estudiantes;
}
