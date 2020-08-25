import { ButtonGroup, ButtonToolbar, Card, CardColumns, Col, Row } from 'react-bootstrap';

import React from 'react'
import { useHistory } from 'react-router-dom'

const Login = (props) => {
    const {posts} = props
    const history = useHistory();

    const panel = (post, key) => {
        return (
            <Row key={key} className="justify-content-md-center mb-2">
                <Col xs lg="12">
                    <Card onClick={() => history.push(`/show/${post.id}`)} style={{cursor: "pointer"}}>
                        <Card.Body>
                        <Card.Text>
                            {post.title}
                        </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src={post.thumbnail} />
                    </Card>
                </Col>
            </Row>
        )
    }

    return(
        <CardColumns>
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
        </CardColumns>
    )
}

export default Login