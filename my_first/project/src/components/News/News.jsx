import React from "react";
import news from './News.module.css'
import FeedsNew from "./FeedsNew/FeedsNew";

const News = (props) => {
    let state = props.store.getState().newsPage;
    return (
        <div className={news.nov}>
            <FeedsNew news={state.news}/>
        </div>
    )
}
export default News;