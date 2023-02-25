import React, {useState} from "react";
import {Table,  Button, ButtonGroup} from 'react-bootstrap';

const TablaDeJugadores = (props) => {
    const {data, eliminarJugador, editarJugador, mostrarInformacion} = props;
    const renderJugadores = (jugador, index)=> {
        const {id, nombre, puntos} = jugador;
        return(
            <tr key={id}>
                <th>    {id}        </th>
                <td>    {nombre}    </td>
                <td>    {puntos}    </td>
                <td>
                <ButtonGroup aria-label="Basic example" className="mb-2">
                    <Button 
                        onClick={()=>mostrarInformacion(id)} 
                        variant = "primary"
                        > 
                            Info 
                    </Button> {' '}
                    <Button 
                        onClick={()=>editarJugador(id)} 
                        variant = "success"> 
                            Editar 
                    </Button> { ' '}
                    <Button 
                        onClick={()=>eliminarJugador(id)} 
                        variant = "danger"> 
                            Eliminar 
                    </Button>
                    </ButtonGroup>
                </td>
            </tr>
        )
    };
    return(
        <Table striped bordered >
            <thead>
                <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Puntos</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.map(renderJugadores)}
            </tbody>
        </Table>
    )
}

export default TablaDeJugadores;
