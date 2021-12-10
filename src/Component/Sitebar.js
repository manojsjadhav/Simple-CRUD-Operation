import React from "react";
import { NavLink } from "react-router-dom";
import img from "../Styles/img.jpg";
const Sitebar = () => {
  return (
    <div className="sitebar">
      <nav className="nav">
        <div className="profile">
          <img src={img} alt="" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active">
              Adduser
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/Alluser" activeClassName="active">
              Alluser
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/About" activeClassName="active">
              About
            </NavLink>
          </li>
        </ul>
        <footer className="fooder">
          <p>@2021 Lorem Ipsum</p>
        </footer>
      </nav>
    </div>
  );
};

export default Sitebar;
