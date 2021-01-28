import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="container align-items-center py-5">
      <div className="row px-md-0" id="splashPage">
        <div className="jumbotron bg-dark">
          <h1 className="display-4 px-4">Welcome to my Portfolio!</h1>
          <p className="lead px-4">
            Seasoned Project Management Professional (PMP) and Certified Systems
            Engineering Professional (CSEP) with a Master of Science in Computer
            Information Systems and a certificate in full stack development
            technologies from the Georgia Tech Professional Education program. I
            have over 10 years of experience in managing multi million-dollar
            security system solutions for the Department of Defense, looking to
            integrate my expertise and passion into full stack engineering
            technologies and web development. My ability to learn concepts
            quickly, manage requirements, and communicate effectively with
            stakeholders allow me to be the ideal candidate for any software
            engineering or development efforts.
          </p>
          <p className="lead px-4">
            <Link
              to="/about"
              className="btn btn-info-color btn-lg"
              role="button"
            >
              About Me
            </Link>
          </p>
        </div>
        {/* <!-- One column that is resized at 768px to take 2/3 of screen space --> */}
      </div>
    </main>
  );
};

export default Home;
