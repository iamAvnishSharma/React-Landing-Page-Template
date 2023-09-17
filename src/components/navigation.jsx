import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="/">
          Rajwaad ~ An Ethnic Wear
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/* <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li> */}
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#collections" className="page-scroll">
                Cataloguee
              </a>
            </li>
            <li>
              <a href="#kediya" className="page-scroll">
                Kedia
              </a>
            </li>
            <li>
              <a href="#chorni" className="page-scroll">
              chorni
              </a>
            </li>
            <li>
              <a href="#koti" className="page-scroll">
                Koti
              </a>
            </li>
            <li>
              <a href="#throwback" className="page-scroll">
                Throwback
              </a>
            </li>
            <li>
              <a href="#throwback2022" className="page-scroll">
              Our Customers
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
