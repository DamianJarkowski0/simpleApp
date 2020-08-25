import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Switch, useHistory } from 'react-router-dom'
import React, {useContext, useEffect, useState} from 'react';

import Display from "../Display"
import {GlobalContext} from "../../context"
import Grid from "../Grid"
import List from "../List"
import Post from "../Post"
import { Redirect } from 'react-router-dom'
import Sort from "../Sort"
import useOnPost from "../../hooks/onPost"

function App() {
  const { token } = useContext(GlobalContext);
  const [display, setDisplay] = useState("list")
  const { posts, pagination, refreshList } = useOnPost()
  const history = useHistory();
    
  let [paginationButtons, setPaginationButtons] = useState([])
  const [order, setOrder] = useState("asc")
  const [orderBy, setOrderBy] = useState("title")
  useEffect(() => {
    paginationButtons = []
    for (let i = 1; i <= pagination.totalPages; i++) {
      if(i===pagination.page) paginationButtons.push(<Button variant="success"onClick={() => history.push(`/posts/${i}`)}>{i}</Button>)
      else paginationButtons.push(
        <Button onClick={() => {
          history.push(`/posts/${i}`)
          refreshList(i, orderBy, order)}}>
            {i}
        </Button>)

      setPaginationButtons([...paginationButtons])
    } 
  }, [pagination,history])
  if (!token) return <Redirect to="/login" />
  
  let displayList
  if(display==="list") displayList = <List posts={posts} paginationButtons={paginationButtons}/>
  else displayList = <Grid posts={posts}  paginationButtons={paginationButtons}/>
  return (
    <Container className="justify-content-md-center text-center">
      <Row>
        <Col lg={2}>
          <Button variant="outline-primary" onClick={() => history.goBack()}>Home</Button>
        </Col>
        <Col lg={8}>Simple Web App</Col>
        <Col lg={2}>
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
          <Sort title="A-Z" orderBy="title" className="mr-2" page={pagination.page} setOrder={setOrder} setOrderBy={setOrderBy} refresh={refreshList}></Sort>
          <Sort title="Date" orderBy="date" page={pagination.page} setOrder={setOrder} setOrderBy={setOrderBy}  refresh={refreshList}></Sort>
        </Col>
        <Col lg={9}> 
        </Col>
        <Col lg={1}>
          <Display title={display} display={setDisplay}></Display>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
      <Router>
        <Switch>
              <Route
                exact
                path="/"
                render={() => {
                    return <Redirect to="/posts/1" />
                }}
              />
          <Route exact path="/posts/:page">{displayList}</Route> 
          <Route exact path="/show/:postId" component={Post} />
        </Switch>
      </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
