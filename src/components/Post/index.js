import { Alert, Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import React, {useContext, useEffect, useRef, useState} from 'react'

import Comment from "../Comment"
import {GlobalContext} from "../../context"
import User from "../User"
import axios from 'axios';
import useOnRead from '../../hooks/onRead'

const config = require("../../config").default

const Login = (props) => {
    const { match: { params : {postId} } } = props;
    const { comments, token } = useContext(GlobalContext);
    const [post, setPost] = useState({})
    const [authorModalShow, setAuthorModalShow] = useState(false);
    const [commentModalShow, setCommentModalShow] = useState(false);
    useOnRead(postId);
    
    useEffect(() => {
        const data = {
            headers: {
                'X-Token': token,
                "content-type": "application/json"
            }
        };
        axios.get(`${config.api}/posts/${postId}`, data)
            .then(response => { 
                setPost(response.data.data)
            })
            .catch(error => {
                return <Alert variant='danger'>{error.response.data.data.message}</Alert>
            });

    }, [])

    return(
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="12">
                    <h1>{post.title}</h1>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="12">
                    <Image src={post.thumbnail} style={{maxWidth: "420px", maxHeight:"420px"}}/>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="12"> 
                    <Row >
                        <Col xs lg="2">
                            <small>{post.date}</small>
                        </Col>
                        <Col xs lg="9">
                        </Col>
                        <Col xs lg="1">
                            <Button variant="link" onClick={() =>  setAuthorModalShow(true)}>i</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{textAlign:"justify"}}>
                <Col xs lg="12">
                {post.excerpt}
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="12">
                    <Button variant="outline-primary" onClick={() => setCommentModalShow(true)}>Comment</Button>
                </Col>
            </Row>
            {
                comments && comments.map(comment => { return (
                    <Card>
                        <Card.Body>
                            <Card.Title  style={{textAlign:"left"}}>
                                {comment.name}
                                </Card.Title>
                            <Card.Text style={{textAlign:"left"}}>
                                {comment.comment}
                            </Card.Text>
                        </Card.Body>
                    </Card>)
                })
            }
            <User show={authorModalShow} onHide={() => setAuthorModalShow(false)} authorId={post.authorId}></User>
            <Comment show={commentModalShow} onHide={() => setCommentModalShow(false)} postId={postId}></Comment>
        </Container>
    )
}

export default Login