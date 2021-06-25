import React from 'react';
import Main from "./Main";
import {connect} from "react-redux";
import {getUserId} from "../../redux/profile-reducer";
import {Redirect,withRouter} from "react-router-dom";

class MainContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 17280
        }
        this.props.getUserId(userId);
    }

    render() {
        if (!this.props.isAuth)return <Redirect to='/login'/>
        return (<Main {...this.props}
                      profile={this.props.profile}

        />)
    }
}

let mapStateToProps = (state) => {
    return (
        {
            profile: state.mainPage.profile,
            isAuth:state.auth.isAuth,
        })
};
let WithRouterComponent = withRouter(MainContainer);
export default connect(mapStateToProps, {getUserId})(WithRouterComponent)