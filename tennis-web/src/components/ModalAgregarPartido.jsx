import React from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';

/*   "id"
        "fechaComienzo"
        "estado"
        "jugadorLocal"
        "jugadorVisitante"
    */

const ModalAgregarPartido = (props) => {
  const {
    modalVisible,
    hideModal,
    isEdit,
    inputDate,
    setInputDate,
    inputJugadorLocal,
    setInputJugadorLocal,
    inputJugadorVisitante,
    setInputJugadorVisitante,
    handleSubmit,
    data,
  } = props;

  return (
    <Modal show={modalVisible} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>{isEdit ? 'Editar Partido' : 'Agregar Partido'}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form noValidate onSubmit={handleSubmit}>
          <Col className="mb-3">
            <Form.Group as={Row} md="4">
              <Form.Label>Fecha de Comienzo</Form.Label>
              <Form.Control
                value={inputDate}
                required
                type="date"
                placeholder="Fecha"
                onChange={(event) =>setInputDate(event.target.value)}
              />
            </Form.Group>

            <Form.Group as={Row} md="4">
              <Form.Label>Jugador Local</Form.Label>
              <Form.Select
                value={inputJugadorLocal}
                required
                onChange={(event) => setInputJugadorLocal(event.target.value)}
                aria-label="Default select example"
              >
                <option>Seleccionar Jugador Local</option>
                {data.map((jugador)=>(
                    <option key={jugador.id} value={jugador.id}>
                        {jugador.nombre}
                    </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Row} md="4">
              <Form.Label>Jugador Visitante</Form.Label>
              <Form.Select
                value={inputJugadorVisitante}
                required
                onChange={(event) => setInputJugadorVisitante(event.target.value)}
                aria-label="Default select example"
              >
                <option>Seleccionar Jugador Visitante</option>
                {data.map((jugador)=>(
                    <option key={jugador.id} value={jugador.id}>
                        {jugador.nombre}
                    </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
          Cerrar
        </Button>
        <Button onClick={handleSubmit} variant={isEdit ? 'success' : 'primary'}>
          {isEdit ? 'Editar' : 'Agregar'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAgregarPartido;
