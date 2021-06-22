import React from 'react';
import PostsContainer from "./Posts/PostsContatiner";
import ProfileInfo from "./Posts/ProfileInfo/ProfileInfo";


const Main = (props) => {
        return (
            <div>
            <ProfileInfo profile={props.profile} />
            {/*<ProfileInfoContainer/>*/}
            <PostsContainer/>
        </div>
    )
}
export default Main;