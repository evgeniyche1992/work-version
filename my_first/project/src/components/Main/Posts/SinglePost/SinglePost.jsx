import React from 'react';
import single from './SinglePost.module.css';


const SinglePost = (props) => {
    return (
        <div className={single.post}>
            <div className={single.text}>
                <img className={`${single.post} ${single.img}`}
                     src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'>
                </img>
            </div>
            <div>
                <div className={single.text}>{props.message}</div>
                <div className={single.like}>{props.like} like</div>
            </div>
        </div>
    )
}
export default SinglePost; 