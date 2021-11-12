import React, { useState } from "react";
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Navbar,
  Col,
  Alert,
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [transactionNumber, setTransactionNumber] = useState();
  const [transactionDate, setTransactionDate] = useState();
  const [transactionAmount, setTransactionAmount] = useState(1500);
  const [programmeType, setProgrammeType] = useState();
  const [programme, setProgramme] = useState();
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    gender: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    pinCode: "",
    state: "",
    country: "INDIA",
  });
  const [degreeStatus, setDegreeStatus] = useState();
  const [academicRecords, setAcademicRecords] = useState([
    {
      degree: "",
      university: "",
      yearOfPassing: "",
      cgpa: "",
    },
  ]);
  const [netStatus, setNetStatus] = useState(); //bool
  const [netRecords, setNetRecords] = useState([
    {
      examName: "",
      score: "",
      validity: "", //bool
    },
  ]);
  const [declaration, setDeclaration] = useState(); //bool

  const onSubmitHandler = () => {
    console.log(transactionDate, transactionNumber);
    axios({
      method: "post",
      url: "/application",
      data: {
        transactionNumber: transactionNumber,
        transactionDate: transactionDate,
        transactionAmount: transactionAmount,
        programmeType: programmeType,
        programme: programme,
        personalDetails: personalDetails,
        degreeStatus: degreeStatus,
        academicRecords: academicRecords,
        netStatus: netStatus,
        netRecords: netRecords,
        declaration: declaration,
      },
    }).then(async (response) => {
      console.log("response: ", response);
    });
  };

  return (
    <>
      <Navbar bg="dark" expand="md" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">CHARUSAT - PhD Admission</Navbar.Brand>
          <Button variant="outline-success">Logout</Button>
        </Container>
      </Navbar>
      <Container>
        <Card className="payment-width  card-margin">
          <CardHeader className="payment-header">
            Payment Information
          </CardHeader>
          <Card.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="formGridTransactionNumber"
              >
                <Form.Label>Transaction Number :</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setTransactionNumber(e.target.value);
                    console.log(transactionNumber);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Transaction Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date_of_birth"
                  onChange={(e) => {
                    setTransactionDate(e.target.value);
                    console.log(transactionDate);
                  }}
                ></Form.Control>
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
              <Button variant="outline-success" onClick={onSubmitHandler}>
                Submit
              </Button>
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
      </Container>
      <Navbar bg="dark" expand="md" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">CHARUSAT - PhD Admission</Navbar.Brand>
          <Button variant="outline-success">Logout</Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Home;
