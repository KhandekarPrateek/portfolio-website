import React from "react";
import Title from "../Title/index";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Button } from "reactstrap";

const DeskTop = () => {
  const PDF_FILE_URL = `${window.location.origin}/portfolio.pdf`;

  const handleDownloadCv = (url) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "PORTFOLIO.pdf");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div className="desktop-view h-100">
      {/* <div className="position-fixed"> */}
      <div className="position-relative d-flex flex-column w-100">
        <h1 className="fw-bolder ms-3 my-5">PRATEEK </h1>
        <div className="ms-5">
          <Title heading="Home" link="Home" />
          <Title heading="About" link="About" />
          <Title heading="Timeline" link="Education" />
          <Title heading="Projects" link="Projects" />
          <Title heading="Skills" link="Skills" />
          <Title heading="Contact" link="Contact" />
        </div>
        <hr className="mx-5 my-2" />
        <Button
          onClick={() => {
            handleDownloadCv(PDF_FILE_URL);
          }}
          size="lg"
          className="p-2 m-3"
        >
          Download CV
        </Button>
        <hr className="mx-5 my-2" />

        <div className="d-flex ms-4 mt-5">
          <Button outline color="secondary" className="mx-1">
            <FaGithub size={25} className="mx-2" />
          </Button>
          <Button outline color="secondary" className="mx-1">
            <FaLinkedin size={25} className="mx-2" />
          </Button>
          <Button outline color="secondary" className="mx-1">
            <SiLeetcode size={25} className="mx-2" />
          </Button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default DeskTop;
