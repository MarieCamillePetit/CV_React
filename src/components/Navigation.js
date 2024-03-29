// eslint-disable-next-line import/no-anonymous-default-export
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav ref={navRef}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Works</NavLink>
          </li>
          <li>
            <a href="mailto:contactportfolio@mariecamillepetit.fr">
              Contact me
            </a>
          </li>
          <li>
            <NavLink to="/login">Account</NavLink>
          </li>
        </ul>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navigation;
