import React from "react";
import { Col, Row } from "reactstrap";
import pic from "../../pic.jpeg";

const Home = () => {
  return (
    <div
      className="home-container d-flex align-items-center justify-content-center"
      id="Home"
    >
      <Row>
        <Col
          sm={12}
          md={5}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={pic} alt="" className="rounded-circle image-home p-3" />
        </Col>

        <Col
          sm={12}
          md={7}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <h1 className="home-name">PRATEEK</h1>
            <h1 className="home-surname">KHANDEKAR</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
