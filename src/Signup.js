import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function sendRegistrationRequest(event) {
    event.preventDefault();

    try {
      if (password.length <= 8) {
        alert("Invalid password. Password must contain at least 8 characters")
        return;

      } else if (username.length <= 8) {
        alert("Invalid username. Username must contain at least 8 characters")
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
          username,
          password,
        }),
      });
      //Response returns from API
      const data = await response.json();

      if (response.ok) {
        alert("Successfully registered");
        const token = data.data.token;
        localStorage.setItem("token", token);
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
    <>
      <h4>Register</h4>
      <form onSubmit={sendRegistrationRequest}>

        <input onChange={(event) => setUsername(event.target.value)} value={username} type="text" placeholder="username"></input>
        <input onChange={(event) => setPassword(event.target.value)} value={password} type="password" placeholder="password"></input>

        <button type="submit">Register</button>
      </form>
    </>
  );
}
// catch (err) {
//   console.log (err)
// }

export default Signup;