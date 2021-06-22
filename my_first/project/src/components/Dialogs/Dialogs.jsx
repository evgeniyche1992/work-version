import React from 'react';
import dialogs from './Dialogs.module.css'
import DilaogItemNew from "./DialogItemNew/DilaogItemNew";
import MessageNewContainer from "./MessageNew/MessageNewContainer";

const Dialogs = (props) => {
    let state = props.store.getState().messagePage;
    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItems}>
                <DilaogItemNew users={state.dialogsElement}/>
            </div>
            <div className={dialogs.messages}>
                <MessageNewContainer  store={props.store}/>
            </div>
        </div>
    )
}
export default Dialogs;