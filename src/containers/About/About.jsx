import React from "react";

const About = () => {
  return (
    <main className="container py-5">
      <div className="row mt-4 px-3 px-md-0">
        {/* <!-- One column that is resized at 768px to take 2/3 of screen space --> */}
        <article className="col-12 col-md-8 bg-dark text-white px-4 mx-md-3">
          {/* <!-- nested row and column for the page header -- takes up full width of column at all screen sizes --> */}
          <header className="row">
            {/* <!-- Page heading - About Me --> */}
            <div className="col-12">
              <h1 className="border-bottom">About Me</h1>
            </div>
          </header>
          {/* <!-- Row below heading that contains the bio image as well at bio text -- both are in a single column with the image floated to the left to allow for text to wrap --> */}
          <section className="row">
            <div className="col-12 pb-4">
              <img
                src="./assets/images/bio-image.jpg"
                className="bio-pic float-left"
                alt="Biography Photo of Neil Gandhi"
              />
              <p>
                I am a seasoned engineer with over 10 years of experience in
                Project Management and Systems Engineering looking to grow my
                expertise by learning Full-Stack Development. Currently, engaged
                in a Full-Stack Development course through The Georgia Institute
                of Technology, I am learning how passionate I am about web
                development and software engineering.
              </p>
              <p>
                When not developing applications, I keep busy with my newborn
                daughters, my wife, and our dog. Currently we are in Charleston,
                SC but are looking to move to either Houston, TX or Atlanta, GA
                at the as soon as possible to be closer to family. I also enjoy
                relaxing on a nice day and playing games during my free time.
              </p>
            </div>
          </section>
          <header className="row">
            {/* <!-- Page heading - About Me --> */}
            <div className="col-12">
              <h1 className="border-bottom">Technical Skills</h1>
            </div>
          </header>
          {/* <!-- Row below heading that contains the bio image as well at bio text -- both are in a single column with the image floated to the left to allow for text to wrap --> */}

          <section className="container">
            <div className="row row-cols-4">
              <div className="col-1">
                <i className="fab fa-html5 fa-2x mr-4"></i>
              </div>
              <div className="col-11 align-items-center">HTML5</div>
              <div className="col-1">
                <i className="fab fa-css3 fa-2x mr-4"></i>
              </div>
              <div className="col-11">CSS3</div>
            </div>
          </section>
          {/* <section className="row">
            <div className="col-12 pb-4">
              <ul className="list-group">
                <li className="list-group-item d-flex align-items-center bg-dark">
                  <i className="fab fa-html5 fa-2x mr-4"></i>HTML5
                </li>
                <li className="list-group-item d-flex align-items-center bg-dark">
                  <i className="fab fa-css3 fa-2x mr-4"></i>CSS3
                </li>
                <li className="list-group-item d-flex align-items-center bg-dark">
                  <i className="fab fa-js-square fa-2x mr-4"></i>JavaScript
                  (Vanilla, jQuery, ES6+)
                </li>
                <li className="list-group-item d-flex align-items-center bg-dark">
                  <i className="fab fa-bootstrap fa-2x mr-4"></i>Bootstrap 4
                </li>
                <li className="list-group-item d-flex align-items-center bg-dark">
                  <i className="fab fa-node fa-2x mr-4"></i>Node.js
                </li>
                <li className="list-group-item d-flex align-items-center bg-dark">
                  <i className="fab fa-github fa-2x mr-4"></i>GitHub
                </li>
                <li className="list-group-item d-flex align-items-center bg-dark">
                  <i className="fas fa-database fa-2x mr-4"></i>Databases
                  (MySQL, MongoDB)
                </li>
                <li className="list-group-item d-flex align-items-center bg-dark">
                  <i className="fab fa-react fa-2x mr-4"></i>React.js
                </li>
              </ul>
            </div>
          </section> */}
        </article>
      </div>
    </main>
  );
};

export default About;
