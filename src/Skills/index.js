import React from "react";
import { Col, Row } from "reactstrap";
import Scroll from "./Scroll";

const Skills = () => {
  return (
    <Row className="skills-container g-0" id="Skills">
      <Row className="d-flex justify-content-center align-items-center h-100 p-5 mb-5 ">
        <div>
          <div className="d-flex skills-header">
            <div class="divider-1 me-3">
              {" "}
              <span></span>
            </div>
            <h3 class="heading-1">Skills</h3>
          </div>
          <h1 className="about-title">Technical Proficiencies</h1>
        </div>
      </Row>
      <Row>
        <Scroll />
      </Row>
    </Row>
  );
};

export default Skills;
