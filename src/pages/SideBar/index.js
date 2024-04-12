import React, { useState } from "react";
import Title from "./Title";
import { Row } from "reactstrap";

const SideBar = () => {
  return (
    <>
      <div className="sidebar-container  d-flex flex-column align-items-center justify-content-center ">
        <Row className="d-flex justify-content-center align-items-center ">
          <h1>PRATEEK</h1>
        </Row>

        <div className="vstack gap-3">
          <Title Heading="Home" link="Home" />
          <Title Heading="About" link="About" />
          <Title Heading="Timeline" link="Education" />
          <Title Heading="Projects" link="Projects" />
          <Title Heading="Skills" link="Skills" />
          <Title Heading="Contact" link="Contact" />
        </div>
      </div>
    </>
  );
};

export default SideBar;
