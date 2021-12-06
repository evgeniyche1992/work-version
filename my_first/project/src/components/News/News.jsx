import React from "react";
import news from './News.module.css'
import FeedsNew from "./FeedsNew/FeedsNew";

const News = (props) => {
    let state = props.news;
    return (
        <div className={news.nov}>
            <FeedsNew news={state}/>
        </div>
    )
}
export default News;