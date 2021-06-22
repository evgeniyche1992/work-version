import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setUsers,
    unfollow,
    setUsersTotalCount, setFollowUser, getUserThunkCreator
} from '../../redux/users-reducer' ;
import Preloader from '../Common/Preloader';
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUserThunkCreator();
       /* this.props.toggleIsFetching(true);
        usersAPI.getUser(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount)
        });*/
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUser(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
            });
    }

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
                setFollowUser={this.props.setFollowUser}
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
        followingUser:state.usersPage.followingUser,

    }
}
/*let mapDispatchToProps = (dispatch) => {

    return {
        follows: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}*/
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleIsFetching,
    setUsersTotalCount,
    setFollowUser,
    getUserThunkCreator,
})(UsersContainer);