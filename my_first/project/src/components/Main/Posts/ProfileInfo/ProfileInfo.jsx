import main from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../../Common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){return <Preloader/>}

           return (
        <div className={main.back}>
            <div>
                <div className={main.name}>{props.profile.fullName}</div>
            </div>
            <div>
               <img src={props.profile.photos.large}/>
               <div>About me: {props.profile.aboutMe}</div>
               <div>Looking for a job: {props.profile.lookingForAJobDescription}</div>
               <div></div>
               <div></div>
               </div>
              </div>
    )
}
export default ProfileInfo;