import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_FOLLOWING_USER = 'SET_FOLLOWING_USER';

let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingUser:[],

}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE:{
            return{...state, currentPage: action.currentPage}
        }

        case TOGGLE_IS_FETCHING:{
            return{...state, isFetching: action.isFetching}
        }
        case SET_TOTAL_USERS_COUNT:{
            return{...state, totalUsersCount: action.count}
        }
        case SET_FOLLOWING_USER:{
            return{...state,
                followingUser:action.isFetching
                    ?[...state.followingUser, action.userId]
                    :[state.followingUser.filter(id=>id!=action.userId)]
        }}
        default:
            return state;

    }
}
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE,currentPage: currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setFollowUser = (isFetching,userId) => ({type: SET_FOLLOWING_USER, isFetching,userId})
export default usersReducer;

export const getUserThunkCreator =(currentPage, pageSize)=>{
    return (dispatch)=>{
        dispatch(toggleIsFetching(true));
        usersAPI.getUser(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount))
        });
    }
}