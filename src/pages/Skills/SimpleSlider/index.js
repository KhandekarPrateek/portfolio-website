import React from "react";
import Slider from "react-slick";
import { Row } from "reactstrap";
import SkillsTab from "./SkillsTab";
import { FaGitAlt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
const SimpleSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 700,
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
    <Row className="d-flex align-items-center justify-content-center mb-5 slider  ">
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
              "Firebase Authentication",
              "Google OAuth 2.0",
              "SQL",
              "C++",
            ]}
          />
        </div>
        <div className="d-flex align-items-center justify-content-center ">
          <SkillsTab
            header={"Version Control/IDE"}
            icon={<FaGitAlt size={50} />}
            skillList={["Git", "GitHub", "VS Code", "Gedit"]}
          />
        </div>
        <div className="d-flex align-items-center justify-content-center ">
          <SkillsTab
            header={"Data Structures And Algorithms"}
            icon={<FaDatabase size={50} />}
            skillList={[
              "Arrays and Strings",
              "Stacks and Queues",
              "Trees and Graphs",
              "Sorting and Searching Algorithms",
              "Dynamic Programming and Backtracking",
              "Heaps and Priority Queues",
              "Algorithm Analysis and Complexity",
            ]}
          />
        </div>
      </Slider>
    </Row>
  );
};

export default SimpleSlider;
