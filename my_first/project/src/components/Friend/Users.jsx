import React from 'react'
import users from './users.module.css'
import userPhoto from "../../pictures/noPhoto.png"
import {NavLink} from 'react-router-dom/cjs/react-router-dom.min';
import {followAPI} from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div className={users.number}> {pages.map(p => {
            return <span className={props.currentPage === p && users.selected}
                         onClick={() => {
                             props.onPageChanged(p)
                         }}>{p}</span>
        })}</div>
        {/*<button onClick={this.getUser}>Get users</button>*/}
        {props.user.map(u => <div key={u.id}>
        <span>
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                         className={users.photo}/>
            </NavLink>
                    </div>
            <div>{u.name}</div>
            <div>{"'" + u.status + "'"}</div>
            {<div>{"u.location.city" + ", " + "u.location.country"}</div>}
        </span>
            <span>
            <div className={users.button}>
                {u.followed ?
                    <button disabled={props.followingUser
                        .some(id => id == u.id)} onClick={() => {
                        props.unfollow(u.id);
                        /* props.setFollowUser(true, u.id);
                         followAPI.unfollowing(u.id)
                             .then(data => {
                             if (data.resultCode == 0) {
                                 props.follow(u.id);
                             }props.setFollowUser(false, u.id);
                             ;
                         })*/
                    }}>Unfollow</button> :
                    <button disabled={props.followingUser.some(id => id == u.id)} onClick={() => {
                        props.follow(u.id);
                        /*props.setFollowUser(true, u.id);
                        followAPI.following(u.id).then(data => {
                            if (data.resultCode == 0) {
                                props.unfollow(u.id);
                            }props.setFollowUser(false, u.id);
                            ;
                        })*/
                    }}>Follow</button>}
            </div>
        </span>
        </div>)}
    </div>
}
export default Users;