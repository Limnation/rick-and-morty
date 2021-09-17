import { Link } from "react-router-dom";
// Import SCSS File Dependency
import "../scss/nav.scss";

export default function Navtop() {
  return (
    <nav className="nav">
      <Link className="links active" to="/">
        <img src="images/nav/nav-logo.png" alt="Rick and Morty" />
      </Link>
    </nav>
  );
}
