import React from 'react';
import Main from "./Main";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

class MainContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 17280;
        }
        ;
        usersAPI.getUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });
    }

    render() {
        return (<Main {...this.props}
                      profile={this.props.profile}
        />)
    }
}

let mapStateToProps = (state) => {
    return (
        {
            profile: state.mainPage.profile,
        })
};
let WithRouterComponent = withRouter(MainContainer);
export default connect(mapStateToProps, {setUserProfile})(WithRouterComponent)