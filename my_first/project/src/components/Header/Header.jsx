import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import noPhoto from "./../../pictures/noPhoto.png";

const Header = (props) => {
    return (
        <header className={css.header}>
            <span className={css.authBlock}>
                <span>{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}</span>
                <span><img className={css.picture} src={props.isAuth && !props.photo ? noPhoto : props.photo}/>
                </span>
            </span>
            <span className={css.mainHeader}>Name</span>
            {/*функция показывет , что если ты залогинен,
            то покажет имя, если нет, то покажет ссылку на Login*/}
        </header>
    )
}
export default Header;