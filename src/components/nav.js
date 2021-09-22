// import { Link } from "react-router-dom"; <-- if additional pages added
// Import SCSS File Dependency
import "../scss/colors.scss";
import "../scss/nav.scss";

export default function Navtop() {
  return (
    <nav className="nav">
      {/* <Link className="links active" to="/"> */}
      <img src="images/nav/rickandmorty.png" alt="Rick and Morty" />
      {/* </Link> */}
    </nav>
  );
}
