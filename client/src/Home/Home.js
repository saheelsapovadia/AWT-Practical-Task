import React from "react";
import { Form, Button, Card, Container, Navbar,Row,Col, Alert, Image } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import "./Home.css";

const Home = () => {
	return (
		<>
			<Navbar bg="dark" expand="md" variant="dark">
				<Container fluid>
					<Navbar.Brand href="#">CHARUSAT - PhD Admission</Navbar.Brand>
					<Button variant="outline-success">Logout</Button>
				</Container>
			</Navbar>

			<div className="card-container">
				<Card className="pay">
					<CardHeader>Payment Information</CardHeader>
					<Card.Body>
						<Form>
							<Form.Group
								className="mb-3"
								controlId="formGridTransactionNumber"
							>
								<Form.Label>Transaction Number :</Form.Label>
								<Form.Control type="text"/>
							</Form.Group>

							<Form.Group>
								<Form.Label>Transaction Date</Form.Label>
								<Form.Control type="date" name="date_of_birth"></Form.Control>
							</Form.Group>

							<Form.Group>
								<Form.Label>Amount Rs.</Form.Label>
								<Form.Control type="text" placeholder="1500" readOnly />
							</Form.Group>

							<Form.Group>
								<Form.Label />
								Upload Payment Recipt{" "}
								<span style={{ color: "red" }}>[Upload only JPG/JPEG]</span>
								<Form.Control type="file" />
							</Form.Group>
						</Form>
					</Card.Body>
				</Card>

				<Card className="phd">
					<CardHeader>Ph.D Programme Type</CardHeader>
					<Card.Body>
						<Form>
            <Form.Group as={Row} className="mb-3">
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Full-Time"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Part-Time"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                 
              </Col>
              </Form.Group>
						</Form>
					</Card.Body>
				</Card>

        <Card className="phd">
					<CardHeader>Ph.D Programme</CardHeader>
					<Card.Body>
						<Form>
            <Form.Select aria-label="Default select example" type="text">
              <option>--Select Faculty for Programme--</option>
              <option value="1">Dr. Ritesh Patel</option>
              <option value="2">Mr. Ronak Patel</option>
              <option value="3">Mr. Mugendra Rahevar</option>
              <option value="4">Mr Martin Parmar</option>
            </Form.Select>
						</Form>
					</Card.Body>
				</Card>

        <Card>
          <CardHeader>Personal Details</CardHeader>
          <Card.Body>
            <Alert variant="danger">NOTE: USE CAPITAL LETTERS</Alert>
            <Form>
              <Row>
                <Col>
                <Form.Group>
                  <Form.Label className>Name of the Candidate[as in Qualifying degree certificate]</Form.Label>
                  <Form.Control/>
                </Form.Group>
                </Col>
                <Col>
                  <Image src="user.png" className="user"></Image>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Gender:</Form.Label>
                    <Form.Select aria-label="Default select example" type="text">
                      <option>--Choose Gender--</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Others</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col className="upload">
                  <Button variant="primary">Upload Image</Button>
                  <span style={{ color: "red" }}>[Upload only JPG/JPEG]</span>
                </Col>
              </Row>
              <hr></hr>
              <h3>Address Details</h3>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control placeholder="City" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Control placeholder="Zip" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Control placeholder="State" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCountry">
              <Form.Control type="text" placeholder="India" readOnly></Form.Control>
              </Form.Group>
            </Row>
            </Form>
          </Card.Body>
        </Card>
        
			</div>
		</>
	);
};

export default Home;
