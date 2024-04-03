import React from "react";
import { Col, Row } from "reactstrap";
import pic from "../../pic.jpeg";
const Home = () => {
  return (
    <div className="home-container " id="Home">
      <Row className="h-100 d-flex align-items-center justify-content-center">
        <Col sm={5}>
          <img
            src={pic}
            alt=""
            className="rounded-circle d-flex align-items-center justify-content-center image-home p-5  "
          />
        </Col>

        <Col
          sm={7}
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
