import React from "react";
import { Button, Card, Navbar, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
	return (
		<div>
			<Navbar bg="dark" expand="md" variant="dark">
				<Container fluid>
					<Navbar.Brand href="#">CHARUSAT - PhD Admission</Navbar.Brand>
					<Button variant="outline-success">Logout</Button>
				</Container>
			</Navbar>

			<div className="card-container">
				<Card className="card">
					<Card.Header>Card Title</Card.Header>
					<Card.Body>
						<Form className="form">
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Check me out" />
							</Form.Group>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</Card.Body>
				</Card>
			</div>
      
			<Button>Submit</Button>
		</div>
	);
};

export default Home;
