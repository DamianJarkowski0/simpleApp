import { Button, Col, Container, Image, Modal, Row } from 'react-bootstrap';
import React, {useContext, useEffect, useState} from 'react'

import {GlobalContext} from "../../context"
import axios from 'axios';

const config = require("../../config").default


const User = (props) => {
  const {authorId} = props
  const [author, setAuthor] = useState({})
  const { token } = useContext(GlobalContext);

  useEffect(() => {
    if(authorId) {

      let data = {
        headers: {
            'X-Token': token,
            "content-type": "application/json"
        }
    };
    axios.get(`${config.api}/author/${authorId}`, data)
        .then(response => { 
          setAuthor(response.data.data)
        })
        .catch(error => {
            console.log(error.response)
        });
    }
        }, [authorId])
  return(
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8} style={{marginTop: "10px"}}>
                <b>{author.name}</b>
            </Col>
            <Col xs={6} md={4}>
                <Image src={author.avatar} style={{maxWidth: "70px", maxHeight:"70px"}}/>
            </Col>
          </Row>
          <Row>
            <Col>
              {author.description}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default User