import React from "react";
import { Form, Button, Card, Container, Navbar, Alert,Row,Col } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import "./Home.css";

const Home = () => {
	const [value, setValue] = React.useState(2);
	const handleChange = (val) => setValue(val);

	return (
		<>
			<Navbar bg="dark" expand="md" variant="dark">
				<Container fluid>
					<Navbar.Brand href="#">CHARUSAT - PhD Admission</Navbar.Brand>
					<Button variant="outline-success">Logout</Button>
				</Container>
			</Navbar>

			<div className="card-container">
				<Card>
					<CardHeader>Payment Information</CardHeader>
					<Card.Body>
						<Form>
							<Form.Group className="mb-3">
								<Form.Label>Transaction Number :</Form.Label>
								<Form.Control />
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

				<Card>
					<CardHeader>Ph.D. Programme Type</CardHeader>
					<Card.Body>
						<Form>
							<div key={"radio"} className="mb-3">
								<Form.Check type={"radio"}>
									<Form.Check.Input type={"radio"} isValid />
									<Form.Check.Label>Full-Time</Form.Check.Label>
								</Form.Check>
							</div>
							<div key={"radio"} className="mb-3">
								<Form.Check type={"radio"}>
									<Form.Check.Input type={"radio"} isValid />
									<Form.Check.Label>Part-Time</Form.Check.Label>
								</Form.Check>
							</div>
						</Form>
					</Card.Body>
				</Card>

				<Card>
					<CardHeader>Ph.D. Programme</CardHeader>
					<Card.Body>
						<Form.Select aria-label="Default select example">
							<option>--Select Faculty for Ph.D Programme--</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</Form.Select>
					</Card.Body>
				</Card>

				<Card>
					<CardHeader>Personal Details</CardHeader>
					<Card.Body>
						<Alert key={"danger"} variant={"danger"}>
							NOTE: Use CAPITAL letters
						</Alert>
						<Row>
							<Col>
								<Form.Group className="mb-3">
									<Form.Label>
										Name of the Candidate[as in Qualifying degree certificate]
									</Form.Label>
									<Form.Control />
								</Form.Group>
							</Col>
							<Col>
								<Form.Control placeholder="Last name" />
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</div>
		</>
	);
};

export default Home;
