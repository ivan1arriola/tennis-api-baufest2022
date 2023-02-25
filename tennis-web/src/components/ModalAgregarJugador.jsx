import React from "react";
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';


const ModalAgregarJugador = (props) =>{
    const { modalVisible, hideModal, handleSubmit, validated, inpuntName, 
        setInpuntName, inputPoints, setInpuntPoints , isEdit} = props;


    return(
        <Modal show={modalVisible} onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {isEdit ? "Editar Jugador" : "Agregar Jugador"}
                </Modal.Title>
            </Modal.Header>
                

            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Col className="mb-3">
                        <Form.Group as={Row} md="4" controlId="validationCustom01">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            value = {inpuntName}
                            required
                            type="text"
                            placeholder="Nombre"
                            onChange={(event)=>setInpuntName(event.target.value)}
                        />
                        </Form.Group>

                        <Form.Group as={Row} md="4" controlId="validationCustom02">
                        <Form.Label>Puntos</Form.Label>
                        <Form.Control
                            value = {inputPoints}
                            required
                            type="number"
                            placeholder="Puntos"
                            onChange={(event)=>setInpuntPoints(event.target.value)}
                        />
                        </Form.Group>
                    </Col>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={hideModal}>
                    Cerrar
                </Button>
                <Button onClick={handleSubmit} variant={isEdit ? "success" : "primary"}>
                    {isEdit ? "Editar" : "Agregar"}
                </Button>
            </Modal.Footer>
        </Modal>


    )
}

export default ModalAgregarJugador;
