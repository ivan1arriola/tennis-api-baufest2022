import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import TablaDePartidos from "../components/TablaDePartidos";
import Typography from "../components/typography/Typography";
import httpClient from "../lib/httpClient"
import ModalAgregarPartido from "../components/ModalAgregarPartido";

    

const Partido = () => {
    
    /*Estados*/
    const [partidos, setPartidos] = useState([]);
    const [jugadores, setJugadores] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [inputDate, setInputDate] = useState(new Date);
    const [inputJugadorLocal, setInputJugadorLocal] = useState("");
    const [inputJugadorVisitante, setInputJugadorVisitante] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    /* Funciones sobre Modal */
    const showModal = (isEdit=false) => {
        setModalVisible(true)
    };
    const hideModal = () => {
        setModalVisible(false)
        setIsEdit(false)
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        isEdit ? actualizarJugador() : agregarPartido();
        hideModal();
    };

    /*Efectos*/
    useEffect(() => {

        getDeJugadores() 
        getDePartidos()}, []);

    const getDePartidos = async () =>{
        const data = await httpClient.get("/partidos");
        setPartidos(data);
    }

    const getDeJugadores = async () =>{
        const data = await httpClient.get("/jugadores");
        setJugadores(data);
    }

    /*Funciones Partido*/

    const agregarPartido = async () => {

         // para asignarle el primer id vacante
         let idPartido = 1
         let coincidencias = partidos.filter((partido)=> idPartido === partido.id);
        
         while(coincidencias.length!=0){
             idPartido++;
             coincidencias = partidos.filter((partido)=> idPartido === partido.id);
         }
         // ---

         const visitante = jugadores.find((jugador)=> Number(inputJugadorVisitante) === jugador.id);
         const local = jugadores.find((jugador)=> Number(inputJugadorLocal) === jugador.id);
 
         const nuevoPartido = {
            id: idPartido,
            fechaComienzo: inputDate,
            estado: "NO_INICIADO",
            jugadorLocal: local,
            jugadorVisitante: visitante
         }
 
         const respuesta = await httpClient.post("/partidos", {data:nuevoPartido});
         if(respuesta) {
             setPartidos([...partidos, respuesta].sort((partido1, partido2) => 
                 partido1.id - partido2.id)
             );
         }

    }

    const eliminarPartido =(id)=>{
        const listaNuevaPartido = partidos.filter((partido)=>partido.id!=id);
        setPartidos(listaNuevaPartido);
    }


    return(
        <>
            <Typography>
                Partidos
            </Typography>

            <Button onClick={showModal} variant = "primary" size="lg" style={{width: 300}}>
                Nuevo Partido
            </Button>

            <ModalAgregarPartido
                modalVisible = {modalVisible} 
                hideModal = {hideModal}
                isEdit = {isEdit}
                inputDate = {inputDate}
                setInputDate = {setInputDate}
                inputJugadorLocal = {inputJugadorLocal}
                setInputJugadorLocal = {setInputJugadorLocal}
                inputJugadorVisitante = {inputJugadorVisitante}
                setInputJugadorVisitante = {setInputJugadorVisitante}
                handleSubmit = {handleSubmit}
                data = {jugadores}



            />
            

            <TablaDePartidos 
                data= {partidos}
                eliminarPartido = {eliminarPartido}
            />
        </>
    )
}

export default Partido;

/* 
            */