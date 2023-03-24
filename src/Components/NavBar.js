import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  }

  // TODO: e.preventDefault on the onClick for the <a> tag logout below.
  return (
    <div className="navbar-container">
      STRANGER'S THINGS<li className="titleText">a place for disregarded relics previously owned by persons unknown </li>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/newposts">Newposts</Link>
          </li>
          {user === null ? (
            <li className="nav-item">
              <Link to="/signup">Signup</Link>
            </li>
          ) : null}
          {user === null ? (
            <li className="nav-item">
              <Link to="/login">login</Link>
            </li>
          ) : (
            <li>
              <a href="#" onClick={logout}>
                logout
              </a>
            </li>
          )}
          {user !== null ? (
            <li className="nav-item">
              <Link to="/messages">Summoning!</Link>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

//course_work/
