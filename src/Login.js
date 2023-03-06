import { createRoot } from 'react-dom/client' 
import {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Signup from "./signup";


const Login = (props) =>{

    const {posts}= props

    const[username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
    
    
    //async function sendUserCredentials
        //try{
            //const response = await fetch("https://strangers-things.herokuapp.com/api/2301-ftb-mt-web-ft/users/login", {
            //     method: "POST",
            //   headers: {
            //     'Content-Type': 'application/json'
            //   },
            //   body: JSON.stringify({
            //     user: {
            //       username: username,
            //       password: password
            //     }
            //   })
            // });







            //const promise = await response.json();

            //*  if statement for authourized*//
            //*   else error message     //


            //*    .getItem("token")    //


            // async function  credentialsApproved()
            //try {
                //const response = await fetch()
                //"Content-Type": "application/json",
                //"Authorization": `Bearer ${token}

                //await json

                //* set userCredentials 
                //* navigate ("/")
 

                //* use className="" to create containers

         
    return (                     
        <>
        <h4>Register</h4>

        
        
        <form className="userNameContainer"> 
        
        <input type="text" placeholder="User Name"value={username} onChange={(event) => {
                        setUsername(event.target.value);
                    }}> </input>
          <input type="text" placeholder="Password" value={password} onChange={(event) => {
                        setPassword(event.target.value);
                    }}></input>          
          
          <input type="submit" value="Login" id="loginButton"
                    onClick={(event) => {
                        event.preventDefault();
                        postUserLogin()
                    }}></input>
        </form>
      </> ) }










export default Login;