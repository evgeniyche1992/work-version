import Message from "../Message/Message";
import React from "react";
import n from "./MessageNew.module.css"
import dialogs from "../Dialogs.module.css";
import {Field, reduxForm} from "redux-form";

const MessageNew = (props) => {
    let message = props.txt.map(m => <Message message={m.message} key={m.id} id={m.id}/>);
    let sendMessageNew = (values) => {
        props.sendMessage(values.newMessage);
    }

    return (
        <div>
            <div className={n.mes}>
                {message}
            </div>
            <NewMessageFormRedux onSubmit={sendMessageNew}/>
        </div>
    )
}

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='Enter your message'
                   className={dialogs.send}
                   name={"newMessage"}
                   component={"input"}
            />
            <div>
                <button className={dialogs.but}>Send message</button>
            </div>
        </form>
    )
}
const NewMessageFormRedux = reduxForm({form: 'newMessage'})(NewMessageForm)
export default MessageNew;