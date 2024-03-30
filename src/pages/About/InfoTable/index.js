import React from "react";

const InfoTable = () => {
  return (
    <div className=" h-100 w-100 p-5 d-flex align-items-center justify-content-center ">
      <div className="h-75  w-75 border border-3   ">
        <div className="border border-bottom-3  about-detail-header p-3">
          <h1 className="about-detail-header-title">Personal details</h1>
        </div>
        <div className=" p-5 ">
          <span className="info-container  ">Name: </span>
          <span className=""> Prateek khandekar</span>
        </div>
      </div>
    </div>
  );
};

export default InfoTable;
