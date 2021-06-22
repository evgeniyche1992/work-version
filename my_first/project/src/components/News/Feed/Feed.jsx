import React from "react";
import n from './Feed.module.css'
const Feed =(props)=>{
    return(
        <div className={n.bor}>
            {props.news}
        </div>
    )
}
export default Feed;