package com.baufest.tennis.springtennis.model;

import javax.persistence.*;

@Entity
@Table(name = "Matricula")
public class Matricula {
    @Id
    @Column
    private long id;

    @Column
    private String nombre;

    @OneToOne (mappedBy = "matricula")
    private Estudiante estudiante;

}
