import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import './UsuarioForm.css'

function UsuarioForm(props) {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [document, setDocument] = useState('')
    const [tel, setTel] = useState('')
    const [state, setState] = useState('')

    const submitEnter = (event) => {
        if (event.key === 'Enter') {
            submit()
        } else if (event.key === 'Escape') {
            setName('')
            setAge('')
            setDocument('')
            setTel('')
            setState('')
        }
    }

    const submit = () => {
        props.register(name, age, document, tel, state)
        setName('')
        setAge('')
        setDocument('')
        setTel('')
        setState('')
    }

    return (
        <>
            <Container>
                <Form onSubmit={submitEnter}>
                    <Row className='row-form mb-5'>
                        <Col>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Digite seu nome" onChange={event => { setName(event.target.value)}} value={name} onKeyUp={submitEnter} />

                                <Form.Control type="text" placeholder="Digite sua idade" onChange={event => { setAge(event.target.value) }} value={age} onKeyUp={submitEnter} />

                                <Form.Control type="text" placeholder="Digite seu CPF" onChange={event => { setDocument(event.target.value) }} value={document} onKeyUp={submitEnter} />

                                <Form.Control type="text" placeholder="Digite seu telefone" onChange={event => { setTel(event.target.value) }} value={tel} onKeyUp={submitEnter} />

                

                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )

}

export default UsuarioForm