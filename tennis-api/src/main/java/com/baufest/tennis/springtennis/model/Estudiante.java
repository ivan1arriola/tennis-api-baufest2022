package com.baufest.tennis.springtennis.model;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Matricula")
public class Estudiante {

    @Id
    @Column
    private long id;

    @Column
    private String name;

    @OneToOne( cascade = CascadeType.ALL)
    @JoinColumn( name = "Matricula")
    private Matricula matricula;


    @ManyToOne()
    @JoinColumn(name = "Universidad")
    private Universidad universidad;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "cursos",
            joinColumns = @JoinColumn(name = "estudianteId"),
            inverseJoinColumns = @JoinColumn(name = "cursoId"))
    private List<Curso> cursos;
}
