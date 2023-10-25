import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div className="container-flex bg-light">
      <div className="row justify-content-center">
        <div className="navbar nav-pills"></div>
        <div className="col-3 nav-item">
          <NavLink className="nav-link text-center" to="/">
            Home
          </NavLink>
        </div>{" "}
        <div className="col-3 nav-item">
          <NavLink className="nav-link text-center" to="/cats">
            Cat Images
          </NavLink>
        </div>{" "}
        <div className="col-3 nav-item">
          <NavLink className="nav-link text-center" to="/memes">
            My Memes
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
