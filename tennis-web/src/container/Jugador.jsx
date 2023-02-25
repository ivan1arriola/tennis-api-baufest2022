import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Typography from "../components/typography/Typography";
import TablaDeJugadores from "../components/TablaDeJugadores";
import ModalAgregarJugador from "../components/ModalAgregarJugador";
import httpClient from "../lib/httpClient"
import ModalInfoJugador from "../components/ModalInfoJugador";



const Jugador = () => {

    /*Estados*/
    const [jugadores, setJugadores] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [validated, setValidated] = useState(false);
    const [inputName, setInpuntName] = useState('');
    const [inputPoints, setInpuntPoints] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [currentlyID, setCurrentlyID] = useState(1);

    const [mostrar, setMostrar] = useState(false);

  


    /*Efectos*/
    useEffect(() => { getDeJugadores()}, []);

    const getDeJugadores = async () =>{
        const data = await httpClient.get("/jugadores");
        console.log(data);
        setJugadores(data);
    }

    /* Funciones sobre Modal */
    const showModal = (isEdit=false) => {
        setModalVisible(true)
    
    };
    const hideModal = () => {
        setModalVisible(false)
        setIsEdit(false)

        setInpuntName('')
        setInpuntPoints('')
    
    }; 

    const mostrarModal = () => setMostrar(true);

    const cerrarModal = () => {
        setMostrar(false);
        setInpuntName('')
        setInpuntPoints('')
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        isEdit ? actualizarJugador() : agregarJugador();
        hideModal();
    };

    /* Funciones sobre Jugador */
    const agregarJugador = async () => {

        // para asignarle el primer id vacante
        let idJugador = 1
        let coincidencias = jugadores.filter((jugador)=> idJugador == jugador.id);
        while(coincidencias.length!=0){
            idJugador++;
            coincidencias = jugadores.filter((jugador)=> idJugador == jugador.id);
        }

        const nuevoJugador = {
            id: idJugador,
            nombre: inputName,
            puntos: inputPoints,
        }

        const respuesta = await httpClient.post("/jugadores", {data:nuevoJugador});
        if(respuesta) {
            setJugadores([...jugadores, respuesta].sort((jugador1, jugador2) => 
                jugador1.id - jugador2.id)
            );
        }
    }

    const actualizarJugador = async ()=>{
        const id = currentlyID;
        const jugador = jugadores.find((jugador)=> id == jugador.id);

        jugador.nombre = inputName;
        jugador.puntos = inputPoints;

        const respuesta = await httpClient.put("/jugadores", {data:jugador});
        if(respuesta) {
            setJugadores([...jugadores, respuesta].sort((jugador1, jugador2) => 
                jugador1.id - jugador2.id)
            );
        }
    }
    
    const editarJugador = (id) => {
        const jugador = jugadores.find((jugador)=> id == jugador.id);

        setInpuntName(jugador.nombre);
        setInpuntPoints(jugador.puntos);
        setIsEdit(true)
        setCurrentlyID(id);

        showModal(true);
    }

    const eliminarJugador =(id)=>{
        const listaNuevaJugadores = jugadores.filter((jugador)=>jugador.id!=id);
        setJugadores(listaNuevaJugadores);
    }

    const mostrarInformacion = (id) =>{
        const jugador = jugadores.find((jugador)=> id == jugador.id);

        setInpuntName(jugador.nombre);
        setInpuntPoints(jugador.puntos);
        setCurrentlyID(id);

        mostrarModal();
    }

    return(
        <>
            <Typography>
                Jugadores
            </Typography>

            <Button onClick={showModal} variant = "primary" size="lg" style={{width: 300}}>
                Agregar Jugador
            </Button>

            <ModalAgregarJugador
               modalVisible={modalVisible}
               hideModal={hideModal}
               validated={validated}
               handleSubmit={handleSubmit}
               inpuntName={inputName}
               setInpuntName={setInpuntName}
               inputPoints={inputPoints}
               setInpuntPoints={setInpuntPoints}
               isEdit = {isEdit}
            />
            <ModalInfoJugador
                mostrarModal = {mostrarModal}
                cerrarModal = {cerrarModal}
                mostrar = {mostrar}
                inputName = {inputName}
                inputPoints = {inputPoints}
            />

            <TablaDeJugadores 
                data= {jugadores} 
                eliminarJugador={eliminarJugador}
                editarJugador = {editarJugador}
                mostrarInformacion = {mostrarInformacion}
            />
        </>
    )
}

export default Jugador;