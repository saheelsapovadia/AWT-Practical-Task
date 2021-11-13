import React from "react";
import {
	Form,
	Button,
	Card,
	Container,
	Navbar,
	Alert,
	Row,
	Col,
	Table,
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import "./Display.css";

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
				<Card>
					<CardHeader>Payment Information</CardHeader>
					<Card.Body>
						<Form>
							<Form.Group className="mb-3">
								<Form.Label>Transaction Number : </Form.Label>
								<br />
								123456789
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Transaction Date : </Form.Label>
								<br />
								01-10-2021
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Amount Rs.</Form.Label>
								<br />
								1500
							</Form.Group>
						</Form>
					</Card.Body>
				</Card>

				<Card>
					<CardHeader>Ph.D. Programme Type</CardHeader>
					<Card.Body>FULL TIME</Card.Body>
				</Card>

				<Card>
					<CardHeader>Ph.D. Programme</CardHeader>
					<Card.Body>PHD</Card.Body>
				</Card>

				<Card>
					<CardHeader>Personal Details</CardHeader>
					<Card.Body>
						<Row>
							<Col>
								<Form.Group className="mb-3">
									<Form.Label>
										Name of the Candidate[as in Qualifying degree certificate]
										<span style={{ color: "red" }}>*</span>
									</Form.Label>
									<br />
									Vivek D Kapadia
								</Form.Group>
							</Col>
						</Row>
						<Form>
							<Form.Label>
								Gender
								<span style={{ color: "red" }}>*</span> :
							</Form.Label>
							<br />
							MALE
						</Form>
						<hr />
						<Form>
							<Form.Label column="lg" lg={2}>
								Address Details
								<span style={{ color: "red" }}>*</span>
							</Form.Label>
							<br />
							Address Line 1
							<br />
							Address Line 1
							<br />
							City
							<br />
							Pin Code
							<br />
							State
							<br />
							India
						</Form>
					</Card.Body>
				</Card>

				<Card>
					<CardHeader>Details of Academic Records</CardHeader>
					<Card.Body>
						Master Degree completed with &gt; 60%
						<br />
						<br />
						<Form.Label>Qualifying Degree Name : </Form.Label>
						<br />
						CSE
						<br />
						<Form.Label>University Name : </Form.Label>
						<br />
						Charusat
						<br />
						<Form.Label>Year of Passing : </Form.Label>
						<br />
						2021
						<br />
						<Form.Label>% or CGPA : </Form.Label>
						<br />
						9.8
						<br />
					</Card.Body>
				</Card>

				<Card>
					<CardHeader>National Eligibility Test</CardHeader>
					<Card.Body>
						YES
						<br />
						<br />
						<Form.Label>Name of Examination : </Form.Label>
						<br />
						University Externals
						<br />
						<br />
						<Form.Label>Score/Percentile : </Form.Label>
						<br />
						80
						<br />
						<Form.Label>Validity Period (If Applicable) : </Form.Label>
						<br />
						6 months
						<br />
					</Card.Body>
				</Card>
			</div>

			<div className="footer">
				<p style={{ margin: "0" }}>CHARUSAT - PhD Admission Portal</p>
			</div>
		</>
	);
};

export default Home;
