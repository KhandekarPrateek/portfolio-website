import EducationTile from "./EducationTile";
import { Col, Row } from "reactstrap";

const Education = () => {
  return (
    <div className="education-conatiner p-5 " id="Education">
      <div className="w-100 headers-timeline">
        <div className="d-flex timeline-small-header">
          <div class="divider-1 me-3">
            {" "}
            <span></span>
          </div>
          <h3 class="heading-1">TIMELINE</h3>
        </div>
        <div className="contact-me pb-5 timeline-period">Timeline Period</div>
      </div>

      <Row>
        <Col
          sm={6}
          className=" d-flex align-items-center  justify-content-center"
        >
          <div className="v-stack gap-3 w-100 ">
            <Row className="education-titles border-3  w-100 align-items-center  justify-content-center ">
              EDUCATION
            </Row>
            <Row className=" w-100 ">
              <EducationTile
                place="SGSITS Indore"
                marks="7.89CGPA"
                year="2022-now"
              />
            </Row>

            <Row className=" w-100 ">
              <EducationTile
                place="Cbse 12th Board"
                marks="93.6%"
                year="2021"
              />
            </Row>
            <Row className=" w-100 ">
              <EducationTile
                place="Cbse 10th Board"
                marks="94.5%"
                year="2019"
              />
            </Row>
          </div>
        </Col>

        <Col
          sm={6}
          className=" d-flex align-items-center  justify-content-center"
        >
          <div className="v-stack gap-3 w-100 ">
            <Row className="education-titles border-3  w-100 align-items-center  justify-content-center ">
              ACHIEVEMENTS
            </Row>
            <Row className=" w-100 ">
              <EducationTile
                place="Cbse 10th Board"
                marks="94.5%"
                year="2019"
              />
            </Row>
            <Row className=" w-100 ">
              <EducationTile
                place="Cbse 10th Board"
                marks="94.5%"
                year="2019"
              />
            </Row>
            <Row className=" w-100 ">
              <EducationTile
                place="Cbse 10th Board"
                marks="94.5%"
                year="2019"
              />
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Education;
