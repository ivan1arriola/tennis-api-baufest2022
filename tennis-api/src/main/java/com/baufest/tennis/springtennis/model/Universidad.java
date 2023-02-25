package com.baufest.tennis.springtennis.model;


import javax.persistence.*;
import java.util.List;

@Entity
@Table ( name = "Universidad")
public class Universidad {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "nombre")
    private String nombre;

    @OneToMany (mappedBy = "universidad", cascade = CascadeType.ALL)
    private List<Estudiante> estudiantes;

}
