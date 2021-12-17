import React from 'react';
import Main from "./Main";
import {connect} from "react-redux";
import {getProfileStat, getUserId, updateProfileStat} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import { getAuth, getProfile, getUserIdFromState, getUserStatus } from '../../redux/selectors';

class MainContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userId;
        if (!userID) {
            let userId = this.props.idEnter;
            userID = userId;
        }
        this.props.getUserId(userID);//запрос на API по поиску id пользователя для дальнейшей прорисовки на странице профиля
        this.props.getProfileStat(userID);
    }

    render() {
        return (
            <Main {...this.props} //отрисовка презентационного компонента (UI) с деструктуризацией и дальнейщим прокидыванием пропсов и профиля
                  profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateProfileStat}
            />)
    }
}

let mapStateToProps = (state) => {
    return (
        {
            profile: getProfile(state), //props для прокидывания
            status: getUserStatus(state),
            isAuth: getAuth(state),
            idEnter:getUserIdFromState(state),
        })
};

export default compose(    //функция compose из функционального программирования предназначена для обьединения
    withAuthRedirect,        //HOC(вызывается последовательно, как и написано),уменьшения кода
    connect(mapStateToProps, {getUserId, getProfileStat, updateProfileStat}),
    withRouter
)(MainContainer)

/*
let AuthRedirectComponent = withAuthRedirect(MainContainer);//HOC включения авторизации для главной страницы профиля

let WithRouterComponent = withRouter(AuthRedirectComponent); //Используется для отображения конкретного пользователя
//заданного в URL

export default connect(mapStateToProps, {getUserId})(WithRouterComponent)//connect для подключения MSTP и MSTD*/
