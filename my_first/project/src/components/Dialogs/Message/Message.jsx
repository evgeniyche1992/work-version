import message from "./Message.module.css";
import React from "react";

const Message = (props) => {
    return (
        <div className={message.messages}>
            <img className={message.message}/>
            {props.message}
        </div>
    )
}
export default Message;