import React from "react";
import { Col, Container, Row } from "reactstrap";

const InfoTable = () => {
  return (
    <div className=" h-auto w-100 p-5 d-flex align-items-center justify-content-center ">
      <Container className=" border border-3  w-100  g-0 ">
        <Row className="  about-detail-header pb-3 g-0">
          <h1 className="about-detail-header-title ">Personal details</h1>
        </Row>
        <Row>
          <Col>Name</Col>
          <Col>Prateek Khandekar</Col>
        </Row>
        <Row>
          <Col>City</Col>
          <Col>Indore,MP</Col>
        </Row>
        <Row>
          <Col>Degree</Col>
          <Col>Bachelors in Computer Science Engineering</Col>
        </Row>
        <Row>
          <Col>Phone</Col>
          <Col>9109998901</Col>
        </Row>
        <Row className="text-break">
          <Col>Email</Col>
          <Col>prateekKhandekar6@gmail.com</Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoTable;
