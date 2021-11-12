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
  Image,
  Table,
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
    console.log(
      transactionDate,
      transactionNumber,
      programmeType,
      programme,
      "personal details",
      personalDetails,
      netStatus,
      "net records",
      netRecords,
      degreeStatus,
      "academic records",
      academicRecords,
      declaration
    );
    axios({
      method: "post",
      url: "api/application",
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

      <div className="card-container">
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
            </Form>
          </Card.Body>
        </Card>

        <Card className="phd">
          <CardHeader>Ph.D Programme Type</CardHeader>
          <Card.Body>
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Col sm={10}>
                  <div onChange={(e) => setProgrammeType(e.target.value)}>
                    <Form.Check
                      type="radio"
                      label="Full-Time"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                      value="Full-time"
                    />
                    <Form.Check
                      type="radio"
                      label="Part-Time"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                      value="Part-time"
                    />
                  </div>
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>

        <Card className="phd">
          <CardHeader>Ph.D Programme</CardHeader>
          <Card.Body>
            <Form>
              <Form.Select
                aria-label="Default select example"
                type="text"
                onChange={(e) => setProgramme(e.target.value)}
              >
                <option>--Select Faculty for Programme--</option>
                <option value="Dr. Ritesh Patel">Dr. Ritesh Patel</option>
                <option value="Mr. Ronak Patel">Mr. Ronak Patel</option>
                <option value="Mr. Mugendra Rahevar">
                  Mr. Mugendra Rahevar
                </option>
                <option value="Mr Martin Parmar">Mr Martin Parmar</option>
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
                    <Form.Label className>
                      Name of the Candidate[as in Qualifying degree certificate]
                    </Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        let newDetails = { ...personalDetails };
                        newDetails.name = e.target.value;
                        setPersonalDetails(newDetails);
                      }}
                    />
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
                    <Form.Select
                      aria-label="Default select example"
                      type="text"
                      onChange={(e) => {
                        let newDetails = { ...personalDetails };
                        newDetails.gender = e.target.value;
                        setPersonalDetails(newDetails);
                      }}
                    >
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
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control
                  placeholder="1234 Main St"
                  onChange={(e) => {
                    let newDetails = { ...personalDetails };
                    newDetails.addressLine1 = e.target.value;
                    setPersonalDetails(newDetails);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control
                  placeholder="Apartment, studio, or floor"
                  onChange={(e) => {
                    let newDetails = { ...personalDetails };
                    newDetails.addressLine2 = e.target.value;
                    setPersonalDetails(newDetails);
                  }}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Control
                    placeholder="City"
                    onChange={(e) => {
                      let newDetails = { ...personalDetails };
                      newDetails.city = e.target.value;
                      setPersonalDetails(newDetails);
                    }}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Control
                    placeholder="Zip"
                    onChange={(e) => {
                      let newDetails = { ...personalDetails };
                      newDetails.pinCode = e.target.value;
                      setPersonalDetails(newDetails);
                    }}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control
                    placeholder="State"
                    onChange={(e) => {
                      let newDetails = { ...personalDetails };
                      newDetails.state = e.target.value;
                      setPersonalDetails(newDetails);
                    }}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCountry">
                  <Form.Control
                    type="text"
                    placeholder="India"
                    readOnly
                  ></Form.Control>
                </Form.Group>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <CardHeader>Details of Academic Records</CardHeader>
          <Card.Body>
            <Form>
              <div onChange={(e) => setDegreeStatus(e.target.value)}>
                <Form.Check
                  type="radio"
                  label="Master Degree completed with &gt; 60%"
                  name="formHorizontalRadios1"
                  // id="formHorizontalRadios1"
                  value="true"
                />
                <Form.Check
                  type="radio"
                  label="Awaited for the Result [Upload last 3 semester Marksheet]"
                  name="formHorizontalRadios1"
                  // id="formHorizontalRadios2"
                  value="false"
                />
              </div>
              {/* <div onChange={(e) => setProgramme(e.target.value)}>
                <Form.Check.Input
                  type={"radio"}
                  isValid
                  name="formHorizontalRadios1"
                  className="mb-3"
                  value="true"
                />
                <Form.Check.Label>
                  Master Degree completed with &gt; 60%
                </Form.Check.Label>
                <br />
                <Form.Check.Input
                  type={"radio"}
                  isValid
                  name="formHorizontalRadios1"
                  className="mb-3"
                  value="false"
                />
                <Form.Check.Label>
                  Awaited for the Result [Upload last 3 semester Marksheet]
                </Form.Check.Label>
              </div> */}
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
                    <Form.Control
                      type="text"
                      placeholder="Qualifying Degree"
                      onChange={(e) => {
                        let newDetails = { ...academicRecords };
                        newDetails.degree = e.target.value;
                        setAcademicRecords(newDetails);
                      }}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      placeholder="University Name"
                      onChange={(e) => {
                        let newDetails = { ...academicRecords };
                        newDetails.university = e.target.value;
                        setAcademicRecords(newDetails);
                      }}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      placeholder="Year of Passing"
                      onChange={(e) => {
                        let newDetails = { ...academicRecords };
                        newDetails.yearOfPassing = e.target.value;
                        setAcademicRecords(newDetails);
                      }}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      placeholder="% or CGPA"
                      onChange={(e) => {
                        let newDetails = { ...academicRecords };
                        newDetails.cgpa = e.target.value;
                        setAcademicRecords(newDetails);
                      }}
                    />
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
              <div onChange={(e) => setNetStatus(e.target.value)}>
                <Form.Check
                  type="radio"
                  label="YES"
                  name="formHorizontalRadios2"
                  // id="formHorizontalRadios1"
                  value="YES"
                />
                <Form.Check
                  type="radio"
                  label="NO"
                  name="formHorizontalRadios2"
                  // id="formHorizontalRadios2"
                  value="NO"
                />
              </div>
              {/* <Form.Check.Input type={"radio"} isValid className="mb-3" />
              <Form.Check.Label>YES</Form.Check.Label>
              <br />
              <Form.Check.Input type={"radio"} isValid className="mb-3" />
              <Form.Check.Label>NO</Form.Check.Label> */}
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
                      onChange={(e) => {
                        let newDetails = { ...netRecords };
                        newDetails.examName = e.target.value;
                        setNetRecords(newDetails);
                      }}
                      type="text"
                      placeholder="Name of Examination"
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      placeholder="Score/Percentile"
                      onChange={(e) => {
                        let newDetails = { ...netRecords };
                        newDetails.score = e.target.value;
                        setNetRecords(newDetails);
                      }}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      placeholder="Validity Period"
                      onChange={(e) => {
                        let newDetails = { ...netRecords };
                        newDetails.validity = e.target.value;
                        setNetRecords(newDetails);
                      }}
                    />
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
            <Form.Check.Input
              type={"checkbox"}
              isValid
              className="mb-3"
              onClick={(e) => {
                setDeclaration(e.target.checked);
              }}
            />
            <Form.Check.Label>
              I declare that all information provided by me in the application
              is true to the best of my knowledge and belief. I understand that
              i am liable for prosecution if any of the information is found to
              be false at any time in future,
            </Form.Check.Label>
          </Card.Body>
        </Card>
        <Button variant="outline-success" onClick={onSubmitHandler}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default Home;
