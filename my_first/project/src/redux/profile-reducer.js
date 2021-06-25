import {usersAPI} from "../api/api";
import {setUsers, setUsersTotalCount, toggleIsFetching} from "./users-reducer";

const addPost = 'ADD-POST';
const updatePost = 'UPDATE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState = {
    friend: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Mikhail'},
        {id: 3, name: 'Elena'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Svetlana'},
        {id: 6, name: 'Mina'},
    ],
    postData: [
        {id: 1, message: 'Hello, my first post of React App', like: '80'},
        {id: 2, message: 'I want to be a fullstack developer', like: '20'},
        {id: 3, message: 'I want to be a fullstack developer (React JS & Node JS)', like: '34'},
        {id: 4, message: 'I want to be a developer', like: '45'}
    ],
    newPostText: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case updatePost:
            return {
                ...state,
                newPostText: action.newText,
            }
        case addPost:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0,
            };

            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: '',
            };
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
            ;
        default:
            return state;
    }
}
export const addPostAC = () => ({type: addPost});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostText = (text) => ({type: updatePost, newText: text});

export const getUserId = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export default profileReducer;

