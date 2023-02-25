import React from "react";
import { ListGroup , Modal, Button, Form, Col, Row } from 'react-bootstrap';

const ModalInfoJugador = (props) =>{
    const {cerrarModal, mostrar, inputName, inputPoints} = props;

    const nombre = inputName
    const puntos = inputPoints

    return(
      <>
      <Modal show={mostrar} onHide={cerrarModal}>
        <Modal.Header closeButton>
          <Modal.Title>Informacion Jugador</Modal.Title>
        </Modal.Header>

        <Modal.Body>

        <ListGroup>
          <ListGroup.Item>{nombre}</ListGroup.Item>
          <ListGroup.Item>{puntos}</ListGroup.Item>
        </ListGroup>
          
         
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModal}>
            Cerrar
          </Button>
        </Modal.Footer>

      </Modal>
    </>
    )
}

export default ModalInfoJugador;