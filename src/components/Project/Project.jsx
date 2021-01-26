import React from "react";

const Project = (props) => {
  return (
    <div class="card mx-2">
      {/* <h5 class="card-header text-center">Project 1 - SearchU</h5> */}
      <img
        src={props.image}
        class="card-img-top"
        alt="Project 1 - SearchU gif"
      />
      <div class="card-body">
        <h5 class="card-title text-center">{props.title}</h5>
        <p class="card-text">{props.description}</p>
      </div>
      <div class="card-footer text-center">
        <button class="btn btn-info-color">Project Details</button>
      </div>
    </div>
  );
};

export default Project;
