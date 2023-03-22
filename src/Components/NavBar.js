import { Link } from "react-router-dom";
// import './style.css';




const Navbar = ({ user }) =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/newposts">Newposts</Link>
    </li>
    { user === null ?
      <li>
        <Link to="/signup">Signup</Link>
      </li> :
      null
    }
    { user === null ?
      <li>
        <Link to="/login">login</Link>
      </li> :
      <li>
        <Link to="/logout">logout</Link>
      </li>
    }
  </div>
  );
}
export default Navbar
