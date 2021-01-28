import React from "react";

const Project = (props) => {
  return (
    <div className="card mx-2">
      {/* <h5 class="card-header text-center">Project 1 - SearchU</h5> */}
      <img src={props.image} className="card-img-top" alt={props.alt} />
      <div className="card-body">
        <h5 className="card-title text-center">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <div className="card-footer text-center">
        <button className="btn btn-info-color">Project Details</button>
      </div>
    </div>
  );
};

export default Project;
