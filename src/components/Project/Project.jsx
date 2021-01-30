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
        <a href={props.appUrl} class="btn btn-info-color mx-2" target="_blank">
          Application
        </a>
        <a
          href={props.githubUrl}
          class="btn btn-info-color mx-2"
          target="_blank"
        >
          Github Repository
        </a>
      </div>
    </div>
  );
};

export default Project;
