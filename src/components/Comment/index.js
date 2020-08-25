import { Alert, Button, Container, Form, Modal, Row } from 'react-bootstrap';

import React from 'react'
import useOnComment from "../../hooks/onComment"

const Comment = (props) => {
    const { data, message, onChange, onSave } = useOnComment(props.postId, props.onHide)

    return(
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Imie" id='name' value={data.login} onChange={onChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control as="textarea" placeholder="Wprowadz komentarz" id='comment' value={data.password} onChange={onChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Akceptuje" id='accept' value={data.password} onChange={onChange} />
                            </Form.Group>
                        </Form>
                        {message && <Alert variant='danger'>{message}</Alert>}
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button variant="primary" onClick={onSave}>Dodaj</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Comment