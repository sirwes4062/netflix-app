import "./Nav.css";
import React from "react";
import { useState, useEffect } from "react";

function Nav() {
  const logo =
    "https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg";
  const avatar =
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img src={logo} alt="Netflix-logo" className="logo" />
      <img src={avatar} alt="avatar" className="avatar" />
    </div>
  );
}

export default Nav;
