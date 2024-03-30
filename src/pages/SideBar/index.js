import React, { useState } from "react";
import Title from "./Title";
import { Row } from "reactstrap";

const SideBar = () => {
  // const [showMenu, setShowMenu] = useState(false);
  // const toggleMenu = () => {
  //   setShowMenu(!showMenu);
  // };
  // const closeOnMobile = () => {
  //   if (window.innerWidth <= 700) {
  //     setShowMenu(false);
  //   }
  // };
  return (
    <>
      <div className="sidebar-container  d-flex align-items-center justify-content-center ">
        {/* <Row className="">
          <h1>PRATEEK</h1>
        </Row> */}

        <div className="vstack gap-3">
          <Title Heading="Home" link="Home" />
          <Title Heading="About" link="About" />
          <Title Heading="Education" link="Education" />
          <Title Heading="Skills" link="Skills" />
          <Title Heading="Projects" link="Projects" />
          <Title Heading="Contact" link="Contact" />
        </div>
      </div>
    </>
  );
};

export default SideBar;
