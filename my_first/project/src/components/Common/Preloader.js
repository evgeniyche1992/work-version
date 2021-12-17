import React from 'react';
import preloader from './../../pictures/preloader.gif';
import preload from "../Common/FormControl.module.css";

let Preloader =(props)=>{
    return <div className={preload.preloaderSpin}>
        <img src={preloader}/>
    </div>
}
export default Preloader;