import React, { useState } from 'react'
import './UsuarioList.css'
import { FaCheck } from 'react-icons/fa';
import {
    Container, ListGroup, Row,
    Col, Button, Modal,
    Alert, Form, Table
} from 'react-bootstrap'

function UsuarioList(props) {

    const usuarios = props.usuarios || []
    const [usuario, setUsuario] = useState({});
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);

    const handleShowEdit = () => setShowEdit(true);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleCloseEdit = () => setShowEdit(false);

    const renderUsuario = () => {

        return usuarios.map((user) => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.document}</td>
                    <td>{user.tel}</td>
                    <td>{user.state}</td>
                    <td>
                        <Button className="mx-3" variant="secondary"
                        onClick={() => {
                            setUsuario(user)
                            handleShowEdit()
                        }}>
                        Editar
                        </Button>
                        <Button className="mx-3" variant="danger"
                            onClick={() => {
                                setUsuario(user)
                                handleShow()
                            }}>
                            Deletar
                        </Button>
                    </td>
                </tr>
            )
        })
    }

    return (

        <Container>

            {
                successDelete
                    ?
                    <Alert key='success' variant='success'>
                        <FaCheck size="20" margin-left="10"/> Usuário apagado com sucesso!
                    </Alert>
                    :
                    ''
            }

            <Row>
                <Col>
                    <ListGroup variant="flush">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Idade</th>
                                    <th>Documento</th>
                                    <th>Telefone</th>
                                    <th>Estado</th>
                                    <th className="text-center"> Ações </th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderUsuario()}
                            </tbody>
                        </Table>
                    </ListGroup>
                </Col>
            </Row>

            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Usuário</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nome do Usuário</Form.Label>
                        <Form.Control type="text" placeholder="Digite o novo nome do usuário"
                            value={usuario.name}
                            onChange={event => setUsuario({ ...usuario, name: event.target.value })} />

                        <Form.Label>Idade do Usuário</Form.Label>
                        <Form.Control type="text" placeholder="Digite a idade do usuário"
                            value={usuario.age}
                            onChange={event => setUsuario({ ...usuario, age: event.target.value })} />
                    
                        <Form.Label>Documento do Usuário</Form.Label>
                        <Form.Control type="text" placeholder="Digite o novo documento do usuário"
                            value={usuario.document}
                            onChange={event => setUsuario({ ...usuario, document: event.target.value })} />

                        <Form.Label>Telefone do Usuário</Form.Label>
                        <Form.Control type="text" placeholder="Digite o novo telefone do usuário"
                            value={usuario.tel}
                            onChange={event => setUsuario({ ...usuario, tel: event.target.value })} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Close
                    </Button>
                    <Button variant="success" onClick={() => {
                        props.editar(usuario)
                        handleCloseEdit()
                    }
                    }>
                        Editar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* //modal delete */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Apagar Usuário</Modal.Title>
                </Modal.Header>
                <Modal.Body>Deseja apagar o usuário: <strong>{usuario.name}</strong></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => {
                        props.deletar(usuario.id)
                        handleClose()
                        setSuccessDelete(true)
                        setTimeout(
                            () => {
                                setSuccessDelete(false)
                            }, 3000)
                    }}>
                        Apagar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default UsuarioList
