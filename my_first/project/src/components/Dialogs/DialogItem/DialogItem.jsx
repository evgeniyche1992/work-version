import dialogItem from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    return (
        <div className={dialogItem.dialog}>
            <NavLink to={"/dialogs/" + props.id} className={dialogItem.dialog}
                     activeClassName={dialogItem.active}> {props.name} </NavLink>
        </div>
    )
}
export default DialogItem;