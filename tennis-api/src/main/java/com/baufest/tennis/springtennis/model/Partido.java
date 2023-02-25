package com.baufest.tennis.springtennis.model;
import com.baufest.tennis.springtennis.enums.Estado;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Partidos")
public class Partido {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private Date fechaComienzo;

	@Column(nullable = false)
	private Estado estado;
/*
	@Column(nullable = false)
	private Jugador jugadorLocal;

	@Column(nullable = false)
	private Jugador jugadorVisitante;
*/
	@Column(nullable = false)
	private int scoreLocal;

	@Column(nullable = false)
	private String puntosGameActualLocal;

	@Column(nullable = false)
	private int cantidadGameLocal;

	@Column(nullable = false)
	private int scoreVisitante;

	@Column(nullable = false)
	private String puntosGameActualVisitante;

	@Column(nullable = false)
	private int cantidadGamesVisitante;

	public Partido() {
	}

	public Partido(Long id, Date fechaComienzo, Estado estado,
				   //   Jugador jugadorLocal, Jugador jugadorVisitante,
				   int scoreLocal, String puntosGameActualLocal,
				   int cantidadGameLocal, int scoreVisitante,
				   String puntosGameActualVisitante,
				   int cantidadGamesVisitante) {

		this.id = id;
		this.fechaComienzo = fechaComienzo;
		this.estado = estado;
	//	this.jugadorLocal = jugadorLocal;
	//	this.jugadorVisitante = jugadorVisitante;
		this.scoreLocal = scoreLocal;
		this.puntosGameActualLocal = puntosGameActualLocal;
		this.cantidadGameLocal = cantidadGameLocal;
		this.scoreVisitante = scoreVisitante;
		this.puntosGameActualVisitante = puntosGameActualVisitante;
		this.cantidadGamesVisitante = cantidadGamesVisitante;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getFechaComienzo() {
		return fechaComienzo;
	}

	public void setFechaComienzo(Date fechaComienzo) {
		this.fechaComienzo = fechaComienzo;
	}

	public Estado getEstado() {
		return estado;
	}

	public void setEstado(Estado estado) {
		this.estado = estado;
	}

	/*public Jugador getJugadorLocal() {
		return jugadorLocal;
	}

	public void setJugadorLocal(Jugador jugadorLocal) {
		this.jugadorLocal = jugadorLocal;
	}

	public Jugador getJugadorVisitante() {
		return jugadorVisitante;
	}

	public void setJugadorVisitante(Jugador jugadorVisitante) {
		this.jugadorVisitante = jugadorVisitante;
	}
*/
	public int getScoreLocal() {
		return scoreLocal;
	}

	public void setScoreLocal(int scoreLocal) {
		this.scoreLocal = scoreLocal;
	}

	public String getPuntosGameActualLocal() {
		return puntosGameActualLocal;
	}

	public void setPuntosGameActualLocal(String puntosGameActualLocal) {
		this.puntosGameActualLocal = puntosGameActualLocal;
	}

	public int getCantidadGameLocal() {
		return cantidadGameLocal;
	}

	public void setCantidadGameLocal(int cantidadGameLocal) {
		this.cantidadGameLocal = cantidadGameLocal;
	}

	public int getScoreVisitante() {
		return scoreVisitante;
	}

	public void setScoreVisitante(int scoreVisitante) {
		this.scoreVisitante = scoreVisitante;
	}

	public String getPuntosGameActualVisitante() {
		return puntosGameActualVisitante;
	}

	public void setPuntosGameActualVisitante(String puntosGameActualVisitante) {
		this.puntosGameActualVisitante = puntosGameActualVisitante;
	}

	public int getCantidadGamesVisitante() {
		return cantidadGamesVisitante;
	}

	public void setCantidadGamesVisitante(int cantidadGamesVisitante) {
		this.cantidadGamesVisitante = cantidadGamesVisitante;
	}
}

