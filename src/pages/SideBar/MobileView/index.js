import React, { useState } from "react";
import Title from "../Title/index";
import { Row } from "reactstrap";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const MobileView = () => {
  const [click, setclick] = useState(false);

  return (
    <div className="mobile-view">
      <div className=" sidebar-container  d-flex flex-column align-items-center justify-content-center ">
        <Row className="d-flex justify-content-center align-items-center ">
          <h1 className="fw-bolder pt-2">PRATEEK</h1>
        </Row>
        {click ? (
          <IoCloseSharp
            className="close-btn"
            size={35}
            onClick={() => setclick(!click)}
          />
        ) : (
          <IoMenu
            className="HamburgerMenu"
            size={35}
            onClick={() => setclick(!click)}
          />
        )}

        {click && (
          <div className="vstack gap-3">
            <Title Heading="Home" link="Home" />
            <Title Heading="About" link="About" />
            <Title Heading="Timeline" link="Education" />
            <Title Heading="Projects" link="Projects" />
            <Title Heading="Skills" link="Skills" />
            <Title Heading="Contact" link="Contact" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileView;
