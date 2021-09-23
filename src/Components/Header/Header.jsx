import React from "react";

import "./header.css";

function Header() {
  //Todos: Make the navbar responsive
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" class="nav-logo">
          <i class="fas fa-book"></i>
          MY BOOKS
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/search" className="nav-link">
              Search
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
