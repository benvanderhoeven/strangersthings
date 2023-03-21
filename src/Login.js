
import { useState } from "react";




const Login = (props) =>{

    const {posts}= props

    const[username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
    
    
    async function sendUserCredentials () {
        try{
            const response = await fetch("https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/users/login", {
                method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                user: {
                  username: username,
                  password: password
                }
                })
              })
            }
            catch(err){

            }
          }
        }
export default Login;





//             const promise = await response.json();

//             *  if statement for authourized*//
//             *   else error message     //


//             *    .getItem("token")    //


//             async function  credentialsApproved()
//             try {
//                 const response = await fetch()
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${token}

//                 await json

//                 * set userCredentials 
//                 * navigate ("/")
 

//                 * use className="" to create containers

         
//     return (                     
//         <>
//         <h2>Login Page</h2>

//         <form className="loginFormContainer">
        
//         <div className="userNameContainer">
        
//         <input type="text" placeholder="Enter User Name"value={username} onChange={(event) => {
//                         setUsername(event.target.value);
//                     }}> </input>
//           <input type="text" placeholder="Enter Password" value={password} onChange={(event) => {
//                         setPassword(event.target.value);
//                     }}></input>          
          
//           <input type="submit" value="Login" id="loginButton"
//                     onClick={(event) => {
//                         event.preventDefault();
//                         postUserLogin()
//                     }}></input>
//         </div>
//         </form>
//       </> ) }

//                 // }
// const appElement = document.getElementById("app")
// const root = createRoot(appElement)
// root.render(<App />)










// export default Login;