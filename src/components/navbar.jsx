import React, { Component } from "react";


//stateless Functional Component
const NavBar = ({totalCounters}) => {
    console.log('NavBAr rendered');
    return (
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar{""} <span className="badge badge-pill bg-secondary">{totalCounters}</span>
            </a>
          </div>
        </nav>
      );
}

export default NavBar;
