import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
    </nav>
  );
}

export default Nav;