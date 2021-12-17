import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../redux/auth-reducer";
import { getAuth, getLogin, getPhotoUser, getUserIdFromState } from '../../redux/selectors';

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
    isAuth: getAuth(state),
    login: getLogin(state),//для прокидывание логина
    userId:getUserIdFromState(state),
    photo:getPhotoUser(state),

})
export default connect(mapStateToProps, {logOut})(HeaderContainer);