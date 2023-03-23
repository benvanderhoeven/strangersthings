import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Components/style.css";

function Signup({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function sendRegistrationRequest(event) {
    event.preventDefault();

    try {
      if (password.length <= 8) {
        alert("Invalid password. Password must contain at least 8 characters");
        return;
      } else if (username.length <= 8) {
        alert("Invalid username. Username must contain at least 8 characters");
        return;
      }

      const response = await fetch("https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/users/register", {
        method: "POST",
        headers: {
          //CORS
          "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
          // "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      });
      //Response returns from API
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        alert("Successfully registered");
        const token = data.data.token;
        localStorage.setItem("token", token);
        setCurrentUser();
        navigate("/"); //import navigate
      } else {
        alert("Failed to register");
      }
    } catch (error) {
      console.error(error);
    }
  }
  //End try block

  return (
    <div className= "newRegisterContainor">
      <h4 className= "registerText">Become one of us ....Register.</h4>
      <form onSubmit={sendRegistrationRequest}>
        <input onChange={(event) => setUsername(event.target.value)} value={username} type="text" className="userNameForm" placeholder="username"></input>
        <br></br>
        <input onChange={(event) => setPassword(event.target.value)} value={password} type="password" className="userPasswordForm" placeholder="password"></input>
        <br></br>

        <button type="submit" className="registerButton">Register</button>

        <div>
          {/* sign in not active, and might be wrong */}
          <h4 className="signInText">If you have already performed The Ritual ....Sign In.</h4>
      <button type="submit" className="signinButton"> Sign in.</button>  
    </div>
      </form>
    </div>
  );
}


export default Signup;
