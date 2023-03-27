
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function sendLoginRequest(event) {
    event.preventDefault();

    try {
      if (password.length <= 8) {
        alert("Invalid password. The Hidden Gatherers will only shroud secrets with the length of 8 characters or more.");
        return;
      } else if (username.length <= 8) {
        alert("Your choice of username is dissapointing, it must have at least 8 characters to seek the Darklord's approval");
        return;
      }


      // sign in error, That is not your Username or Password, We shall not be deceived!



      const response = await fetch("https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/users/login", {
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
        alert("You Have Entered. Many enter, few leave.");
        const token = data.data.token;
        localStorage.setItem("token", token);
        setCurrentUser();
        navigate("/"); //import navigate
      } else {
        alert("You Have Failed US!");
      }
    } catch (error) {
      console.error(error);
    }
  }
  //End try block

  return (
    <div className= "newRegisterContainor">
      <h4 className= "registerText">Become one of us ....Register.</h4>
      <form onSubmit={sendLoginRequest}>
        <input onChange={(event) => setUsername(event.target.value)} value={username} type="text" className="userNameForm" placeholder="username"></input>
        <br></br>
        <input onChange={(event) => setPassword(event.target.value)} value={password} type="password" className="userPasswordForm" placeholder="password"></input>
        <br></br>

        <button type="submit" className="registerButton">Login</button>

        <div>
          {/* sign in not active, and might be wrong */}
          <h4 className="signInText">If you have already performed the Ritual of Register ....Sign In.</h4>
      <button type="submit" className="signinButton"> Sign in.</button>  
    </div>
      </form>
    </div>
  );
}


export default Login;




// const Login = (props) =>{

//     const {posts}= props

//     const[username, setUserName] = useState("");
//     const [password, setPassword] = useState("");
    
    
    
//     async function sendUserCredentials () {
//         try{
//             const response = await fetch("https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/users/login", {
//                 method: "POST",
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//               body: JSON.stringify({
//                 user: {
//                   username: username,
//                   password: password
//                 }
//                 })
//               })
//             }
//             catch(err){

//             }
//           }
//         }
// export default Login;





// //             const promise = await response.json();

// //             *  if statement for authourized*//
// //             *   else error message     //


// //             *    .getItem("token")    //


// //             async function  credentialsApproved()
// //             try {
// //                 const response = await fetch()
// //                 "Content-Type": "application/json",
// //                 "Authorization": `Bearer ${token}

// //                 await json

// //                 * set userCredentials 
// //                 * navigate ("/")
 

// //                 * use className="" to create containers

         
// //     return (                     
// //         <>
// //         <h2>Login Page</h2>

// //         <form className="loginFormContainer">
        
// //         <div className="userNameContainer">
        
// //         <input type="text" placeholder="Enter User Name"value={username} onChange={(event) => {
// //                         setUsername(event.target.value);
// //                     }}> </input>
// //           <input type="text" placeholder="Enter Password" value={password} onChange={(event) => {
// //                         setPassword(event.target.value);
// //                     }}></input>          
          
// //           <input type="submit" value="Login" id="loginButton"
// //                     onClick={(event) => {
// //                         event.preventDefault();
// //                         postUserLogin()
// //                     }}></input>
// //         </div>
// //         </form>
// //       </> ) }

// //                 // }
// // const appElement = document.getElementById("app")
// // const root = createRoot(appElement)
// // root.render(<App />)










// // export default Login;