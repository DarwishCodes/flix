import React from "react";
import "./navigation.scss";

function Navigation() {
  return (
    <div className="navigation">
      <div className="row row--144">
        <div className="navigation__wrap">
          <div className="navigation__logo-box">
            <div className="navigation__logo">FLIX</div>
          </div>
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Home
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Movies
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  TV
                </a>
              </li>
            </ul>
          </nav>
          <nav className="navigation__nav-search">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Search
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
