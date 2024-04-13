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
    <Row className="about-container g-0  px-5 " id="About">
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
            Welcome to my website! I'm thrilled to have you here. I'm a Computer
            Science Engineering student from Indore, Madhya Pradesh, with a
            passion for web development. My journey has led me to explore the
            depths of React and JavaScript, where I've sharpened my skills and
            expanded my horizons. As a firm believer in the power of
            problem-solving, I find myself at home when faced with challenges
            that demand innovation and creativity. Alongside my proficiency in
            web development technologies, I'm also adept in Data Structures and
            Algorithms (DSA), a skill set that adds depth to my problem-solving
            capabilities. Feel free to delve deeper into my journey and
            projects. I'm excited to share more with you!
          </p>
          <Button
            onClick={() => {
              handleDownloadCv(PDF_FILE_URL);
            }}
            size="lg"
            className="p-4"
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
