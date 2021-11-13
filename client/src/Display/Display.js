import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Card,
  Container,
  Navbar,
  Row,
  Col,
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useParams } from "react-router-dom";
import "./Display.css";

const Display = () => {
  const { id } = useParams();
  const [appData, setAppData] = useState();

  useEffect(() => {
    const fetchParamsApp = async () => {
      try {
        const { data } = await axios.get(`/api/application/${id}`);
        console.log(data);
        setAppData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchParamsApp();
  }, [id]);

  return (
    <>
      <Navbar bg="dark" expand="md" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">CHARUSAT - PhD Admission</Navbar.Brand>
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
                {appData?.transactionNumber}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Transaction Date : </Form.Label>
                <br />
                {appData?.transactionDate.slice(0, 10)}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Amount Rs.</Form.Label>
                <br />
                {appData?.transactionAmount}
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>

        <Card>
          <CardHeader>Ph.D. Programme Type</CardHeader>
          <Card.Body>{appData?.programmeType}</Card.Body>
        </Card>

        <Card>
          <CardHeader>Ph.D. Programme</CardHeader>
          <Card.Body>{appData?.programme}</Card.Body>
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
                  {appData?.name}
                </Form.Group>
              </Col>
            </Row>
            <Form>
              <Form.Label>
                Gender
                <span style={{ color: "red" }}>*</span> :
              </Form.Label>
              <br />
              {appData?.gender}
            </Form>
            <hr />
            <Form>
              <Form.Label column="lg" lg={2}>
                Address Details
                <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <br />
              {appData?.addressLine1}
              <br />
              {appData?.addressLine2}
              <br />
              {appData?.city}
              <br />
              {appData?.pincode}
              <br />
              {appData?.state}
              <br />
              {appData?.country}
            </Form>
          </Card.Body>
        </Card>

        <Card>
          <CardHeader>Details of Academic Records</CardHeader>
          <Card.Body>
            {appData?.degreeStatus}
            <br />
            <br />
            <Form.Label>Qualifying Degree Name : </Form.Label>
            <br />
            {appData?.academicRecords[0].degree}
            <br />
            <Form.Label>University Name : </Form.Label>
            <br />
            {appData?.academicRecords[0].university}
            <br />
            <Form.Label>Year of Passing : </Form.Label>
            <br />
            {appData?.academicRecords[0].yearOfPassing}
            <br />
            <Form.Label>% or CGPA : </Form.Label>
            <br />
            {appData?.academicRecords[0].cgpa}
            <br />
          </Card.Body>
        </Card>

        <Card>
          <CardHeader>National Eligibility Test</CardHeader>
          <Card.Body>
            {appData?.netStatus}
            <br />
            <br />
            <Form.Label>Name of Examination : </Form.Label>
            <br />
            {appData?.netRecords[0].examName}
            <br />
            <br />
            <Form.Label>Score/Percentile : </Form.Label>
            <br />
            {appData?.netRecords[0].score}
            <br />
            <Form.Label>Validity Period (If Applicable) : </Form.Label>
            <br />
            {appData?.netRecords[0].validity}
            <br />
          </Card.Body>
        </Card>
      </div>

      <div className="footer">
        <p style={{ margin: "0" }}>CHARUSAT - PhD Admission Portal</p>
        <p
          style={{
            fontSize: "0.7em",
          }}
        >
          Made by G16 - 19CE044,55,97,127,141
        </p>
      </div>
    </>
  );
};

export default Display;
