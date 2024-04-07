import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Button } from "reactstrap";
const ProjectTile = ({ projectImage, ButtonText, description, codeLink }) => {
  return (
    <Row className="h-100 w-100 mt-1 ">
      <Col sm={7} className="d-flex justify-content-center align-items-center ">
        <div>
          {description.map((ele) => {
            return <li>{ele}</li>;
          })}
        </div>
      </Col>
      <Col
        sm={5}
        className="d-flex justify-content-center align-items-center flex-column  "
      >
        <div className="w-100">
          <img
            src={projectImage}
            className="img-fluid border border-5  "
            alt=""
          />
        </div>
        <Link to={codeLink} target="_blank" className="mt-5">
          <Button>{ButtonText}</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default ProjectTile;