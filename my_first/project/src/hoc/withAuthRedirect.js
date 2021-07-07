import {Redirect} from "react-router-dom";
import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";

let authMapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='login'/>
            return <Component {...this.props} />
        }
    }

    /*let ConnectedAuthRedirect = connect(authMapStateToProps)(RedirectComponent)
    return ConnectedAuthRedirect;*/

    return compose(
        connect(authMapStateToProps)
    )(RedirectComponent)
}