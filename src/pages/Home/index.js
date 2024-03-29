import React from "react";
import { Col, Row } from "reactstrap";

const Home = () => {
  return (
    <div className="home-container " id="Home">
      <Row className="h-100 ">
        <Col sm={4}>PHOTO</Col>

        <Col
          sm={8}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <h1 className="home-name">PRATEEK</h1>

            <h1 className="home-surname"> KHANDEKAR</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
