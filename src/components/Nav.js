import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
    <nav className="nav">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="About">About</Link>
      <Link className="link" to="Forecast">Forecast</Link>
      <Link className="link"to="Historical">Historical Weather</Link>
      <Link className="link"to="Random">Random Weather</Link>
      {/* <Link className="link"to="/https://openweathermap.org/api/history-forecast-bulk" target={"_blank"}> Historic Weather</Link> */}
      <Link className="link" to="Contacts">Contact Us</Link>
      {/* <Contacts />  */}

    </nav>
    </div>
  );
}

export default Nav;
