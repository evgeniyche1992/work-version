import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData, setUserPhoto} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.authorized().then(
            data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    this.props.setUserData(id, email, login);
                   authAPI.getUserPhoto(this.props.userId).then(photos => {
                     this.props.setUserPhoto(photos.small);
                    });
                }
            });

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
export default connect(mapStateToProps, {setUserData, setUserPhoto})(HeaderContainer);