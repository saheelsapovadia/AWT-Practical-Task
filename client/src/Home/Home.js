import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Navbar } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [transactionNumber, setTransactionNumber] = useState();
  const [transactionDate, setTransactionDate] = useState();
  const [amount, setAmount] = useState(1500);
  const [programmeType, setProgrammeType] = useState();
  const [phdProgramme, setPhdProgramme] = useState();
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
  const [degree, setDegree] = useState({
    degree: "",
    university: "",
    yearOfPassing: "",
    cgpa: "",
  });
  const [NET, setNET] = useState(); //bool
  const [examination, setExamination] = useState({
    examination: "",
    score: "",
    applicable: "", //bool
  });
  const [declaration, setDeclaration] = useState(); //bool

  const onSubmitHandler = () => {
    console.log(transactionDate, transactionNumber);
    axios({
      method: "post",
      url: "/application-submit",
      data: {
        transactionNumber: transactionNumber,
        transactionDate: transactionDate,
        amount: amount,
        programmeType: programmeType,
        phdProgramme: phdProgramme,
        personalDetails: personalDetails,
        degreeStatus: degreeStatus,
        degree: degree,
        NET: NET,
        examination: examination,
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

        <Card className="payment-width card-margin">
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
