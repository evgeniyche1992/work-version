import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import noPhoto from "./../../pictures/noPhoto.png";

const Header = (props) => {
    return (
        <header className={css.header}>
            <div className={css.authBlock}>
                <span>{props.isAuth ?
                    <span>
                        <div><span>{props.login}</span></div>
                        <span><img className={css.picture} src={props.isAuth && !props.photo ? noPhoto : props.photo}/>
                </span>
                        <div><span>
                            <button onClick={props.logOut}>LogOut</button>
                        </span></div>
                        </span>
                    : <NavLink to={'/login'}>Login</NavLink>}</span>
            </div>
            <span className={css.mainHeader}>Name</span>
            {/*функция показывет , что если ты залогинен,
            то покажет имя, если нет, то покажет ссылку на Login*/}
        </header>
    )
}
export default Header;