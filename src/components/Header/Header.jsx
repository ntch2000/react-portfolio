import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/" className="navbar-brand ps-4">
        Neil Gandhi
      </NavLink>

      <button className="navbar-toggler" aria-label="Toggle navigation">
        <span
          className="navbar-toggler-icon"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        ></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/portfolio"
              className="nav-link"
              activeClassName="active"
            >
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
