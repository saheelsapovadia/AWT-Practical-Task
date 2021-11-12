import React from "react";
import {Form, Button, Card, Container,Row, Navbar} from 'react-bootstrap';
import CardHeader from "react-bootstrap/esm/CardHeader";
import "./Home.css";


const Home = () => {
  return(
    <>
    <Navbar bg="dark" expand="md" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#">CHARUSAT - PhD Admission</Navbar.Brand>
                    <Button variant="outline-success">Logout</Button>
                </Container>
      </Navbar>
    <Container>
      
      <Card  className="payment-width  card-margin">
        <CardHeader className="payment-header">Payment Information</CardHeader>
        <Card.Body>
          <Form>
              <Form.Group className="mb-3" controlId="formGridTransactionNumber">
                <Form.Label>Transaction Number :</Form.Label>
                <Form.Control  />
              </Form.Group>

              <Form.Group>
                <Form.Label>Transaction Date</Form.Label>
                <Form.Control type="date" name='date_of_birth' ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Amount Rs.</Form.Label>
                <Form.Control type="text" placeholder="1500" readOnly/>
              </Form.Group>

              <Form.Group>
                <Form.Label/>Upload Payment Recipt <span style={{color:"red"}}>[Upload only JPG/JPEG]</span>
                <Form.Control type="file"/>
              </Form.Group>
          </Form>
        </Card.Body>
      </Card>

      <Card  className="payment-width card-margin">
        <CardHeader className="payment-header">Payment Information</CardHeader>
        <Card.Body>
          <Form>
              <Form.Group className="mb-3" controlId="formGridTransactionNumber">
                <Form.Label>Transaction Number :</Form.Label>
                <Form.Control  />
              </Form.Group>

              <Form.Group>
                <Form.Label>Transaction Date</Form.Label>
                <Form.Control type="date" name='date_of_birth' ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Amount Rs.</Form.Label>
                <Form.Control type="text" placeholder="1500" readOnly/>
              </Form.Group>

              <Form.Group>
                <Form.Label/>Upload Payment Recipt <span style={{color:"red"}}>[Upload only JPG/JPEG]</span>
                <Form.Control type="file"/>
              </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      
    </Container>
    <Navbar bg="dark" expand="md" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#">CHARUSAT - PhD Admission</Navbar.Brand>
                    <Button variant="outline-success">Logout</Button>
                </Container>
      </Navbar>
    </>
  ) 
};

export default Home;
