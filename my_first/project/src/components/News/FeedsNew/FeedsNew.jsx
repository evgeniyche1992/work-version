import n from "./FeedsNew.module.css"
import React from "react";
import Feed from "../Feed/Feed";

const FeedsNew = (props) => {

    let feeds = props.news.map (m => <Feed news = {m.news} key={m.id} id={m.id}/>);
    return (
        <div className={n.feed}>
            {feeds}
        </div>
    )
}
export default FeedsNew;