import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import CSS File Dependency
import "../scss/nav.scss";

export default function Navtop() {
  return (
    <nav className="nav" id="nav">
      <Link className="links active" to="/">
        <img src="images/nav/nav-logo.png" alt="Rick and Morty" />
      </Link>
    </nav>
  );
}
