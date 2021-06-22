import React from "react";
import FriendItem from "./FriendItem";
import d from "./Friend.module.css"
const Friend =(props)=>{
let fr = props.cool.mainPage.friend.map(m=> <FriendItem id={m.id} key={m.id} name={m.name}/>)
    return(
        <div className={d.friends}>
            {fr}
        </div>
    )
}
export default Friend;