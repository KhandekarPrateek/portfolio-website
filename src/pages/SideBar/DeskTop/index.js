import React from "react";
import Title from "../Title/index";
import { Row } from "reactstrap";

const DeskTop = () => {
  return (
    <div className="desktop-view">
      <div className="sidebar-container  d-flex flex-column align-items-center justify-content-center  ">
        <Row className="d-flex justify-content-center align-items-center ">
          <h1 className="fw-bolder pt-2 pb-5 mb-5 ms-5 ps-5">PRATEEK </h1>
        </Row>

        <div className="vstack gap-3">
          <Title heading="Home" link="Home" />
          <Title heading="About" link="About" />
          <Title heading="Timeline" link="Education" />
          <Title heading="Projects" link="Projects" />
          <Title heading="Skills" link="Skills" />
          <Title heading="Contact" link="Contact" />
        </div>
      </div>
    </div>
  );
};

export default DeskTop;
