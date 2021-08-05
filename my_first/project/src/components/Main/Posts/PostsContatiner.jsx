import React from 'react';
import {addPostAC, updateNewPostText} from '../../../redux/profile-reducer';
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {

    return {
        dataPost: state.mainPage.postData,


    }
}


export default connect(mapStateToProps, {addPostAC, updateNewPostText})(Posts);
