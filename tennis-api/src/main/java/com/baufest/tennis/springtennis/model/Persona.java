package com.baufest.tennis.springtennis.model;

import javax.persistence.*;

@Entity
@Table(name = "Persona")
public class Persona {
    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "nombre")
    private String nombre;

    @ManyToOne()
    @JoinColumn(name = "Domicilio")
    private Domicilio domicilio;
}
