import React from "react";
import loginStyle from "./Login.module.css";

const Login =(props)=>{
    return(<div>
        <span className={loginStyle.auth}>Please LogIn in social-network.samurai.js</span>
        <div className={loginStyle.authStr}>Login:<input className={loginStyle.authInput}></input></div>
        <div className={loginStyle.authStr}>Password: <input></input></div>
        <div><button className={loginStyle.buttOn}>LogIN</button></div>
    </div>)
}
export default Login
