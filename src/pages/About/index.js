import React from "react";
import { Button, Col, Row } from "reactstrap";
import InfoTable from "./InfoTable";
const PDF_FILE_URL = `${window.location.origin}/portfolio.pdf`;

const About = () => {
  const handleDownloadCv = (url) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "PORTFOLIO.pdf");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <Row className="about-container g-0  " id="About">
      <Col
        sm={6}
        className="d-flex justify-content-center align-items-center h-100 p-5 mb-5"
      >
        <div>
          <div className="d-flex prateek-khandekar-about">
            <div class="divider-1 me-3">
              {" "}
              <span></span>
            </div>
            <h3 class="heading-1">PRATEEK KHANDEKAR</h3>
          </div>
          <h1 className="about-title">Software Developer based in Indore,MP</h1>
          <p className="about-text">
            Welcome to my website! I'm a Computer Science Engineering student
            hailing from Indore, Madhya Pradesh. With a keen interest in web
            development, I've delved into the realms of React and JavaScript,
            honing my skills along the way. Proficient in problem-solving, I
            thrive on challenges that push me to innovate and create. Explore
            further to learn more about my journey and projects
          </p>
          <Button
            onClick={() => {
              handleDownloadCv(PDF_FILE_URL);
            }}
            size="lg"
          >
            Download CV
          </Button>
        </div>
      </Col>

      <Col sm={6} className="d-flex justify-content-center align-items-center ">
        <InfoTable />
      </Col>
    </Row>
  );
};

export default About;
