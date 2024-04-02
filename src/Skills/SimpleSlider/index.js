import React from "react";
import Slider from "react-slick";
import { Row } from "reactstrap";
const SimpleSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    intialSlide: 0,
  };

  return (
    <Row className="d-flex align-items-center justify-content-center m-0">
      <Slider {...settings}>
        <div className="d-flex align-items-center justify-content-center m-0">
          <h3>1</h3>
        </div>
        <div className="d-flex align-items-center justify-content-center m-0">
          <h3>2</h3>
        </div>
        <div className="d-flex align-items-center justify-content-center m-0">
          <h3>3</h3>
        </div>
        <div className="d-flex align-items-center justify-content-center m-0">
          <h3>4</h3>
        </div>
        <div className="d-flex align-items-center justify-content-center m-0">
          <h3>5</h3>
        </div>
        <div className="d-flex align-items-center justify-content-center m-0">
          <h3>6</h3>
        </div>
      </Slider>
    </Row>
  );
};

export default SimpleSlider;
