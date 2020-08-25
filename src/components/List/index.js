import { Accordion, Button, ButtonGroup, ButtonToolbar, Card, Col, Container, Image, Row } from 'react-bootstrap';
import React, {useState} from 'react'

import User from "../User"
import { useHistory } from 'react-router-dom'

const Login = (props) => {
    const {posts} = props
    const [modalShow, setModalShow] = useState(false);
    const [authorId, setAuthorId] = useState(false);
    const history = useHistory();

    const panel = (post, key) => {
        return (
            <Row key={key} className="justify-content-md-center mb-2">
                <Col xs lg="12">
                    <Accordion>
                    <Card className="text-center">
                    <Card.Body>
                        <Row>
                            <Col lg={1}><Image src={post.thumbnail} style={{maxWidth: "70px", maxHeight:"70px"}}/></Col>
                            <Col lg={9}>
                                <Row>{post.date}</Row>
                                <Row onClick={() => history.push(`/show/${post.id}`)}  style={{cursor: "pointer"}}>{post.title}</Row>
                                
                            </Col>
                            <Col lg={2}>
                                <Accordion.Toggle as={Button} variant="primary" className="mr-2" eventKey="0">
                                    e
                                </Accordion.Toggle>
                                <Button variant="primary" onClick={() => {
                                    setAuthorId(post.authorId)
                                    setModalShow(true)
                                    }}>i</Button>
                            </Col>
                        </Row>

                    </Card.Body>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>{post.excerpt}</Card.Body>
                    </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </Col>
            </Row>
        )
    }

    return(
        <Container>
            { 
                posts.map((post) => {
                    return panel(post)
                })
            }
            
            <Row>
                <Col lg={12}>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-2" aria-label="First group">
                    {props.paginationButtons.map(button => button)}
                    </ButtonGroup>
                </ButtonToolbar>
                </Col>
            </Row>
            <User show={modalShow} onHide={() => setModalShow(false)} authorId={authorId}></User>
        </Container>
    )
}

export default Login