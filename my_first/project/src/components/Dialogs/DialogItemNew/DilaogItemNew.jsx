import DialogItem from "../DialogItem/DialogItem";
import React from "react";

const DialogItemNew = (props) => {
    let dialogsElement = props.users.map(n => <DialogItem name={n.name} key={n.id} id={n.id}/>);
    return (
        <div>
            {dialogsElement}
        </div>
    )
}
export default DialogItemNew;