import React from "react";

const Contact = () => {
  return (
    <main className="container py-5">
      {/* <!--Contains all content, provides spacing on the top for all screen sizes and spacing on the sides for xs screen size --> */}
      <div className="row mt-4 px-3 px-md-0">
        {/* <!-- One column that is resized a 768px to take 2/3 of screen space with additional padding at all screen sizes. Additional horizontal margin spacing is provided at screen sizes of 768px and above. Background color is white --> */}
        <div className="col-12 col-md-8 bg-dark text-white mx-md-3 px-4">
          {/* <!-- nested row and column for the page header -- takes up full width of column at all screen sizes and has additional padding on top --> */}
          <header className="row">
            <div className="col-12 pt-2">
              <h1 className="border-bottom">Contact Information</h1>
            </div>
          </header>
          <section className="row">
            <div className="col-12 pb-4 contact">
              <ul className="list-group">
                <li className="list-group-item d-flex align-items-center">
                  <i className="far fa-envelope fa-2x me-3"></i>
                  <h5>
                    Email:
                    <a className="ms-2" href="mailto:neil.sgandhi@gmail.com">
                      neil.sgandhi@gmail.com
                    </a>
                  </h5>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="fas fa-mobile-alt fa-2x ms-1 me-4"></i>
                  <h5>
                    Phone: <span className="ms-2 info-color">404-488-6531</span>
                  </h5>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="fab fa-github fa-2x me-3"></i>
                  <h5>
                    GitHub:
                    <a
                      className="ms-2"
                      href="https://github.com/ntch2000"
                      target="_blank"
                    >
                      @ntch2000
                    </a>
                  </h5>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="fab fa-linkedin fa-2x me-4"></i>
                  <h5>
                    LinkedIn:
                    <a
                      className="ms-2"
                      href="https://www.linkedin.com/in/neil-sgandhi
                      "
                      target="_blank"
                    >
                      Neil S. Gandhi
                    </a>
                  </h5>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="far fa-file fa-2x me-4"></i>
                  <h5>Resume:</h5>
                  <a
                    className="btn btn-info-color mx-3"
                    href="./assets/resume/Gandhi_Neil_Resume_WebDev_20210128.pdf"
                    target="_blank"
                  >
                    View
                  </a>
                  <a
                    className="btn btn-info-color"
                    href="./assets/resume/Gandhi_Neil_Resume_WebDev_20210128.pdf"
                    download="Gandhi_Neil_resume"
                    target="_blank"
                  >
                    Download
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contact;
