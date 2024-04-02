import React from "react";
import Slider from "react-slick";
import { Row } from "reactstrap";
import SkillsTab from "./SkillsTab";
import { FaGitAlt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
const SimpleSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    intialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Row className="d-flex align-items-center justify-content-center  ">
      <Slider {...settings}>
        <div className="d-flex align-items-center justify-content-center  ">
          <SkillsTab
            header={"Frontend"}
            icon={<FaReact size={50} />}
            skillList={[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Bootstrap",
              "Reactstrap",
            ]}
          />
        </div>

        <div className="d-flex align-items-center justify-content-center ">
          <SkillsTab
            header={"Backend Development"}
            icon={<IoLogoFirebase size={50} />}
            skillList={[
              "Firestore Database",
              "Authentication and Authorization",
            ]}
          />
        </div>
        <div className="d-flex align-items-center justify-content-center ">
          <SkillsTab
            header={"Version Control"}
            icon={<FaGitAlt size={50} />}
            skillList={["Git", "GitHub"]}
          />
        </div>
        <div className="d-flex align-items-center justify-content-center ">
          <SkillsTab
            header={"Data Structures And Algorithms"}
            icon={<FaDatabase size={50} />}
            skillList={["Proficient in C++"]}
          />
        </div>
      </Slider>
    </Row>
  );
};

export default SimpleSlider;
