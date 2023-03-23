import { Link, useNavigate } from "react-router-dom";
// import './style.css';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  }

  // TODO: e.preventDefault on the onClick for the <a> tag logout below.
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/newposts">Newposts</Link>
      </li>
      {user === null ? (
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      ) : null}
      {user === null ? (
        <li>
          <Link to="/login">login</Link>
        </li>
      ) : (
        <li>
          <a href="#" onClick={logout}>
            logout
          </a>
        </li>
      )}
    </div>
  );
};
export default Navbar;
