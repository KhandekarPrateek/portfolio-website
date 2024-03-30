import React from "react";

const Title = ({ Heading, link }) => {
  return (
    <div className=" pb-2 ">
      <a href={`#${link}`} className="sidebar-title">
        {Heading}
      </a>
    </div>
  );
};

export default Title;
