import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav id="header-nav" className="navbar navbar-default">
        <div id="header-div" className="container">
          <div className="navbar-header">
            <NavLink to="/homepage" className="pull-left">
              <div id="logo-img"></div>
            </NavLink>
            <div className="navbar-brand">
              <NavLink to="/homepage">
                <h1>Welcome to CollabPoint</h1>
              </NavLink>
              <p>Collaborative Efforts Towards Success</p>
            </div>
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#collapsable-nav"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div id="collapsable-nav" className="collapse navbar-collapse">
            <ul id="nav-list" className="nav navbar-nav">
              <li>
                <NavLink to="/new-request">New Request</NavLink>
              </li>
              <li>
                <NavLink to="/requests-raised">Requests Raised</NavLink>
              </li>
              <li>
                <NavLink to="/my-requests">My Requests</NavLink>
              </li>
              <li>
                <NavLink to="/team-desk">Team Desk</NavLink>
              </li>
              <li>
                <NavLink to="/homepage">Admin Task</NavLink>
              </li>
              <li>
                <NavLink to="/homepage">Preferences</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
