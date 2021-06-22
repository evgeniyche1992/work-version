import React from 'react';
import {addPostAC, updateNewPostText} from '../../../redux/profile-reducer';
import Posts from "./Posts";
import {connect} from "react-redux";

    let mapStateToProps = (state) => {

        return {
            newPostText: state.mainPage.newPostText,
            dataPost: state.mainPage.postData,


                                }
    }
    /*let mapDispatchToProps = (dispatch) => {
        return {
            addPost: () => {
                dispatch(addPostActionCreator());
            },
            updateNewPostText: (text) => {
                dispatch(updateActionCreator(text));
            },
        }
    }*/

export default connect(mapStateToProps, {addPostAC, updateNewPostText})(Posts);
