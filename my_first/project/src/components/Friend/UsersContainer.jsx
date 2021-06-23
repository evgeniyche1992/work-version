import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setUsers,
    unfollow,
    setUsersTotalCount,
    setFollowUser,
    getUserThunkCreator
} from '../../redux/users-reducer' ;
import Preloader from '../Common/Preloader';
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                user={this.props.user}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingUser={this.props.followingUser}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        user: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingUser: state.usersPage.followingUser,

    }
}
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setFollowUser,
    getUsers: getUserThunkCreator,
})(UsersContainer);