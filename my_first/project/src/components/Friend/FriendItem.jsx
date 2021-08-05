import React from "react";
import {NavLink} from "react-router-dom";
import d from "./Friend.module.css"

const FriendItem = (props) => {

    return (
        <div className={d.fry}>
            <div><NavLink to={"/friends/" + props.id} className={d.item}><img className={d.image}
                                                                              src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'/>
                <div className={d.item}>{props.name}</div>
            </NavLink></div>
        </div>
    )
}
export default FriendItem;