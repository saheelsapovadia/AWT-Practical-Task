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
				<Card>
					<CardHeader>Payment Information</CardHeader>
					<Card.Body>
						<Form>
							<Form.Group className="mb-3">
								<Form.Label>Transaction Number :</Form.Label>
								<Form.Control />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Transaction Date</Form.Label>
								<Form.Control type="date" name="date_of_birth"></Form.Control>
							</Form.Group>

							<Form.Group className="mb-3">
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
							<Form.Check.Input type={"radio"} isValid className="mb-3" />
							<Form.Check.Label>Full-Time</Form.Check.Label>
							<br />
							<Form.Check.Input type={"radio"} isValid className="mb-3" />
							<Form.Check.Label>Part-Time</Form.Check.Label>
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
										<span style={{ color: "red" }}>*</span>
									</Form.Label>
									<Form.Control />
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label />
									<span style={{ color: "red" }}>[Upload only JPG/JPEG]</span>
									<Form.Control type="file" />
								</Form.Group>
							</Col>
						</Row>
						<Form>
							<Form.Label>
								Gender
								<span style={{ color: "red" }}>*</span> :
							</Form.Label>
							<br />
							<Form.Check.Input type={"radio"} isValid className="mb-3" />
							<Form.Check.Label>Male</Form.Check.Label>
							<br />
							<Form.Check.Input type={"radio"} isValid className="mb-3" />
							<Form.Check.Label>Female</Form.Check.Label>
							<br />
							<Form.Check.Input type={"radio"} isValid className="mb-3" />
							<Form.Check.Label>Transgender</Form.Check.Label>
							<br />
						</Form>
						<hr />
						<Form>
							<Form.Label column="lg" lg={2}>
								Address Details
								<span style={{ color: "red" }}>*</span>
							</Form.Label>
							<Form.Control
								type="text"
								placeholder="Address Line 1"
								className="mb-3"
							/>
							<Form.Control
								type="text"
								placeholder="Address Line 2"
								className="mb-3"
							/>
							<Row className="mb-3">
								<Col>
									<Form.Control type="text" placeholder="City" />
								</Col>
								<Col>
									<Form.Control type="text" placeholder="Pin Code" />
								</Col>
							</Row>
							<Row className="mb-3">
								<Col>
									<Form.Control type="text" placeholder="State" />
								</Col>
								<Col>
									<Form.Control type="text" placeholder="INDIA" />
								</Col>
							</Row>
						</Form>
					</Card.Body>
				</Card>

				<Card>
					<CardHeader>Details of Academic Records</CardHeader>
					<Card.Body>
						<Form>
							<Form.Check.Input type={"radio"} isValid className="mb-3" />
							<Form.Check.Label>
								Master Degree completed with &gt; 60%
							</Form.Check.Label>
							<br />
							<Form.Check.Input type={"radio"} isValid className="mb-3" />
							<Form.Check.Label>
								Awaited for the Result [Upload last 3 semester Marksheet]
							</Form.Check.Label>
						</Form>
						<Table bordered hover>
							<thead>
								<tr>
									<th>Qualifying Degree Name</th>
									<th>University Name</th>
									<th>Year of Passing</th>
									<th>% or CGPA</th>
									<th>
										Upload Degree Certificate / Last 3 Semester Marksheet{" "}
										<span style={{ color: "red" }}>[Upload only JPG/JPEG]</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<Form.Control type="text" placeholder="Qualifying Degree" />
									</td>
									<td>
										<Form.Control type="text" placeholder="University Name" />
									</td>
									<td>
										<Form.Control type="text" placeholder="Year of Passing" />
									</td>
									<td>
										<Form.Control type="text" placeholder="% or CGPA" />
									</td>
									<td>
										<Form.Control type="file" />
									</td>
								</tr>
							</tbody>
						</Table>
					</Card.Body>
				</Card>

				<Card>
					<CardHeader>National Eligibility Test</CardHeader>
					<Card.Body>
						<Form>
							<Form.Check.Input type={"radio"} isValid className="mb-3" />
							<Form.Check.Label>YES</Form.Check.Label>
							<br />
							<Form.Check.Input type={"radio"} isValid className="mb-3" />
							<Form.Check.Label>NO</Form.Check.Label>
						</Form>
						<Table bordered hover>
							<thead>
								<tr>
									<th>Name of Examination</th>
									<th>Score/Percentile</th>
									<th>Validity Period (If Applicable)</th>
									<th>
										Upload Score Card
										<span style={{ color: "red" }}>[Upload only JPG/JPEG]</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<Form.Control
											type="text"
											placeholder="Name of Examination"
										/>
									</td>
									<td>
										<Form.Control type="text" placeholder="Score/Percentile" />
									</td>
									<td>
										<Form.Control type="text" placeholder="Validity Period" />
									</td>
									<td>
										<Form.Control type="file" />
									</td>
								</tr>
							</tbody>
						</Table>
					</Card.Body>
				</Card>

				<Card>
					<CardHeader>
						Upload Applicant Signature <br />
						<span style={{ color: "red" }}>[Upload only JPG/JPEG]</span>
					</CardHeader>
					<Card.Body>
						<Form.Control type="file" />
					</Card.Body>
				</Card>

				<Card>
					<CardHeader>Declaration</CardHeader>
					<Card.Body>
						<Form.Check.Input type={"radio"} isValid className="mb-3" />
						<Form.Check.Label>
							I declare that all information provided by me in the application
							is true to the best of my knowledge and belief. I understand that
							i am liable for prosecution if any of the information is found to
							be false at any time in future,
						</Form.Check.Label>
					</Card.Body>
				</Card>
			</div>
			<div className="btn-submit">
				<Button variant="outline-success">Submit Application</Button>
				<span style={{ color: "red" }}>CLICK ONLY ONCE</span>
			</div>

			<Navbar bg="dark" expand="md" variant="dark">
				<Container fluid>
					<Navbar.Brand href="#">CHARUSAT - PhD Admission Portal</Navbar.Brand>
					<Button variant="outline-success">Logout</Button>
				</Container>
			</Navbar>
		</>
	);
};

export default Home;
