import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authority, logOut} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
      //  this.props.authority(this.props.userId);
           }

    render() {
        return (
            <Header {...this.props} photo={this.props.photo}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,//для прокидывание логина
    userId:state.auth.userId,
    photo:state.auth.photo,

})
export default connect(mapStateToProps, {logOut})(HeaderContainer);