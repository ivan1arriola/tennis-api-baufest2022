package com.baufest.tennis.springtennis.model;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Domicilio")
public class Domicilio {
    @Id
    @Column(name = "id")
    private int id;

    @Column
    private String direccion;

    @OneToMany(mappedBy = "domicilio", cascade = CascadeType.ALL)
    private List<Persona> personas;

}
