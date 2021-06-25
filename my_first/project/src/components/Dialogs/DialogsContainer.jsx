import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


class DialogsContainer extends React.Component {
    render()
    {    if(!this.props.isAuth)return <Redirect to='login'/>
    return (<Dialogs store={this.props.store}/>)
}}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        store: state.messagePage,
    }
}
let mapDispatchToProps = (dispatch) => {
}
export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);