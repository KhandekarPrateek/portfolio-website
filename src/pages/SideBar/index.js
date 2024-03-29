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
            <Title Heading="Home" link="Home" />
            <Title Heading="About" link="About" />
            <Title Heading="Service" link="Service" />
            <Title Heading="Portfolio" link="Portfolio" />
            <Title Heading="Contact" link="Contact" />
          </div>
        </Row>
      </div>
    </>
  );
};

export default SideBar;
