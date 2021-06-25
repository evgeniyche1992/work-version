import Message from "../Message/Message";
import React from "react";
import n from "./MessageNew.module.css"
import dialogs from "../Dialogs.module.css";

const MessageNew = (props) => {
    let message = props.txt.map(m => <Message message={m.message} key={m.id} id={m.id}/>);
    let but = () => {
        props.sendMessage();
    }
    let changeMessage = (e) => {
        let newMessage = e.target.value;
        props.changerMessage(newMessage);
    }
    return (
        <div>
            <div className={n.mes}>
                {message}
            </div>
            <textarea placeholder='Enter your message'
                      onChange={changeMessage}
                      className={dialogs.send}
                      value={props.newMessages}/>
            <div>
                <button onClick={but} className={dialogs.but}>Send message</button>
            </div>
        </div>
    )
}
export default MessageNew;