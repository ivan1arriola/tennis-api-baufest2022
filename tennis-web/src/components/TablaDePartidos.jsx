import React, {useState} from "react";
import {Table,  Button, ButtonGroup} from 'react-bootstrap';

 /*   "id"
        "fechaComienzo"
        "estado"
        "jugadorLocal"
        "jugadorVisitante"
    */

const TablaDePartidos = (props) => {
    const {data , eliminarPartido} = props;
    const renderPartidos = (Partido)=> {
        const {id, jugadorLocal, jugadorVisitante, fechaComienzo, estado} = Partido;
        return(
            <tr key={id}>
                <th>    {id}                        </th>
                <td>    {jugadorLocal.nombre}</td>
                <td>    {jugadorVisitante.nombre}</td>
                <td>    {fechaComienzo}             </td>
                <td>    {estado}                    </td>

                <td><ButtonGroup aria-label="Basic example">
                    <Button 
                            onClick={()=>eliminarPartido(id)} 
                            variant = "danger"> 
                                Eliminar 
                        </Button>
                    
                        <Button 
                            onClick={()=>editarJugador(id)} 
                            variant = "success"> 
                                Editar 
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
                    <th>id                  </th>
                    <th>Jugador Visitante   </th>
                    <th>Jugador Local       </th>
                    <th>Fecha de Inicio     </th>
                    <th>Estado              </th>
                    <th>Acciones            </th>
                </tr>
            </thead>
            <tbody>
                {data.map(renderPartidos)}
            </tbody>
        </Table>
    )
}

export default TablaDePartidos;
