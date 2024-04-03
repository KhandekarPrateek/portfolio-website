import React from "react";
import { Col, Container, Row } from "reactstrap";

const InfoTable = () => {
  return (
    <div className=" h-100 w-100 p-5 d-flex align-items-center justify-content-center  ">
      <Container className="   w-100   g-0 ">
        <Row className="  about-detail-header p-3 g-0 ">
          <h1 className="about-detail-header-title ">Personal details</h1>
        </Row>
        <div className="infotable-conatiner">
          <Row className="mb-3 p-4 infotable-text ">
            <Col sm={3}>Name</Col>
            <Col sm={9}>Prateek Khandekar</Col>
          </Row>
          <Row className="mb-3 p-4 infotable-text">
            <Col sm={3}>City</Col>
            <Col sm={9}>Indore,MP</Col>
          </Row>
          <Row className="mb-3 p-4 infotable-text">
            <Col sm={3}>Degree</Col>
            <Col sm={9}>Bachelors in Computer Science Engineering</Col>
          </Row>
          <Row className="mb-3 p-4 infotable-text">
            <Col sm={3}>Phone</Col>
            <Col sm={9}>9109998901</Col>
          </Row>
          <Row className="text-break mb-3 p-4 infotable-text">
            <Col sm={3}>Email</Col>
            <Col sm={9}>prateekkhandekar6@gmail.com</Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default InfoTable;
