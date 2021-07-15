import React from "react";
import loginStyle from "./Login.module.css";
import {Field, reduxForm} from "redux-form";

const Login = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <span className={loginStyle.auth}>Please LogIn in social-network.samurai.js</span>
            <div className={loginStyle.authStr}>Login:
                <Field className={loginStyle.authInput} placeholder={"Enter your login"} name={"login"}
                       component={"input"}/>
            </div>
            <div className={loginStyle.authStr}>Password:
                <Field placeholder={"Enter your password"} name={"password"} component={"input"}/>
            </div>
            <div className={loginStyle.authStr}>Remember me
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>
            </div>
            <div>
                <button className={loginStyle.buttOn}>LogIN</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(Login)

const onSubmit = (formData) => {
    console.log(formData);
    let login = formData.login;
    let password = formData.password;

}

const LoginForm = (props) => {

    return (<div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
export default LoginForm
