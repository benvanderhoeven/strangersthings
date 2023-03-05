import { Link } from "react-router-dom";

//const NavBar = (props) =>{


const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/home">Home</Link>
    </li>
    <li>
      <Link to="/posts">Posts</Link>
    </li>
    <li>
      <Link to="/singlepost">singlepost</Link>
    </li>
    <li>
      <Link to="/logout">logout</Link>
    </li>
  </div>
  );
}
export default Navbar