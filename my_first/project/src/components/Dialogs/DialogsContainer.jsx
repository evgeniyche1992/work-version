import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class DialogsContainer extends React.Component { //контейнерный компонент (BLL)
    render() {
        return (<Dialogs store={this.props.store}/>)
    }
}

let mapStateToProps = (state) => {
    return {
        store: state.messagePage,//проброс в пропсы данных из стейта
    }
}
let mapDispatchToProps = (dispatch) => {
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
    )(DialogsContainer)

/*let AuthRedirectComponent = withAuthRedirect(DialogsContainer);//HOC для определения и отбражения в последующем старницы
//с сообщениями, если пользователь авторизован, то отобразиться,если нет, то будет переходить на страницу с предложением залогиниться*/
