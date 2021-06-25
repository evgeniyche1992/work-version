import React from 'react';
import dialogs from './Dialogs.module.css'
import DilaogItemNew from "./DialogItemNew/DilaogItemNew";
import MessageNewContainer from "./MessageNew/MessageNewContainer";

const Dialogs = (props) => {
        return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItems}>
                <DilaogItemNew users={props.store.dialogsElement}/>
            </div>
            <div className={dialogs.messages}>
                <MessageNewContainer store={props.store}/>
            </div>
        </div>
    )
}
export default Dialogs;