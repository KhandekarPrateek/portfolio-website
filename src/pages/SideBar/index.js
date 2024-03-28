import React from "react";
import Title from "./Title";
import { Row } from "reactstrap";

const SideBar = () => {
  return (
    <>
      <div className="sidebar-container  d-flex align-items-center justify-content-center sideBar-display sidenav">
        {/* <Row className="">
          <h1>PRATEEK</h1>
        </Row> */}
        <Row>
          <div className="vstack gap-3">
            <Title Heading="Home" />
            <Title Heading="About" />
            <Title Heading="Service" />
            <Title Heading="Portfolio" />
            <Title Heading="Contact" />
          </div>
        </Row>
      </div>
    </>
  );
};

export default SideBar;
