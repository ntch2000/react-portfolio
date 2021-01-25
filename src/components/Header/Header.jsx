import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="index.html" className="navbar-brand">
        Neil Gandhi
      </a>

      <button className="navbar-toggler" aria-label="Toggle navigation">
        <span
          className="navbar-toggler-icon"
          data-toggle="collapse"
          data-target="#navbarMenu"
        ></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="contact.html" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="portfolio.html" className="nav-link">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="about.html" className="nav-link active">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
