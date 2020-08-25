import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

import React from 'react'
import useOnLogin from "../../hooks/onLogin"

const Login = () => {
    const { data, message, onChange, onLogin } = useOnLogin({})
    return(
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="4">
                    <Card className="text-center">
                    <Card.Header>Simple Web App</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Login" id='username' value={data.login} onChange={onChange}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type="password" placeholder="Hasło" id='password' value={data.password} onChange={onChange} />
                            </Form.Group>
                        </Form>
                        <Button variant="primary" onClick={onLogin}>Zaloguj</Button>
                        {message && <Alert variant='danger'>{message}</Alert>}
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login