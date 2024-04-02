import React from "react";

const SkillsTab = ({ header, icon, skillList }) => {
  return (
    <div className="pe-5 ps-5 pt-5 skills-tab ">
      <div className="skill-icon">{icon}</div>
      <div className="pb-3 skill-header pt-3 ">
        <h3>{header}</h3>
      </div>

      <div>
        {skillList.map((ele, index) => (
          <div key={index} className=" pt-3 skill-list">
            {ele}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTab;
