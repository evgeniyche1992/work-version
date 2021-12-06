import React from "react";
import loginStyle from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControl";
import {minLengthCreator, requiredField} from "../../utils/validator";
import {connect} from "react-redux";
import {logIn} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import Preloader from "../Common/Preloader";
import errorSum from "../Common/FormControl.module.css"

const minLength5 = minLengthCreator(5);
const Login = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <span className={loginStyle.auth}>Please LogIn in social-network.samurai.js</span>
            <div className={loginStyle.authStr}>Login:
                <Field className={loginStyle.authInput} placeholder={"Enter your login"} name={"email"}
                       component={Input} validate={requiredField} type={'text'}/>
            </div>
            <div className={loginStyle.authStr}>Password:
                <Field placeholder={"Enter your password"} name={"password"} component={Input}
                       validate={[requiredField, minLength5]}
                       type={'password'}
                />
            </div>
            <div className={loginStyle.authStr}>Remember me
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/>
            </div>
            <div>
                <button className={loginStyle.buttOn}>LogIN</button>
            </div>
           {props.error &&<div className={errorSum.errorFull}>{props.error}</div>}
            <span><img className={loginStyle.image} src={props.captcha}/></span>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(Login)
const LoginForm = (props) => {
    const onSubmit = (formData) => {
        props.logIn(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    if (props.captcha) {
        console.log(props.captcha);
    }
    return (<div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
})
export default connect(mapStateToProps, {logIn})(LoginForm)
