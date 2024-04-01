import React, { useRef, useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
const ITEM_WIDTH = 200;
const Scroll = () => {
  const skillsArray = [
    {
      heading: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Reactstrap"],
    },
    {
      heading: "Backend Development",
      skills: [
        "Firebase Firestore Database",
        "Authentication and Authorization",
      ],
    },
    {
      heading: "Version Control",
      skills: ["Git", "GitHub"],
    },
    {
      heading: "Data Structures and Algorithms",
      skills: [
        "Proficient in C++",
        "Data Structures: Arrays Linked lists Stacks Queues Trees Graphs",
        " Algorithms: Sorting Searching Dynamic programming",
      ],
    },
  ];
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();
  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };
  return (
    <Container className="container-skills">
      <div
        ref={containerRef}
        style={{
          overflowX: "scroll",
          scrollBehavior: "smooth",
        }}
        className="w-100 "
      >
        <div className="content-box">
          {skillsArray.map((ele) => (
            <Col sm={4}>
              <div className="skills-heading ">{ele.heading}</div>
              <div>
                {ele.skills.map((eleSkill) => (
                  <h5>{eleSkill}</h5>
                ))}
              </div>
            </Col>
          ))}
        </div>
      </div>
      <Row className="d-flex align-items-end justify-content-end  ">
        <Col>
          <Button onClick={() => handleScroll(-ITEM_WIDTH)}>left</Button>
        </Col>
        <Col>
          <Button onClick={() => handleScroll(+ITEM_WIDTH)}>right</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Scroll;
