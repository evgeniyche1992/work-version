import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

import state from "../../redux/store";
import Friend from "../Friend/Friend";


function Nav() {
    return (
        <nav className={classes.nav}>
            <div>
                <div><NavLink to="/profile" className={classes.item} activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div><NavLink to="/users" className={classes.item}
                              activeClassName={classes.active}>Users</NavLink></div>
                <div><NavLink to="/dialogs" className={classes.item} activeClassName={classes.active}>Messages</NavLink>
                </div>
                <div><NavLink to="/news" className={classes.item} activeClassName={classes.active}>News</NavLink></div>
                <div><NavLink to="/music" className={classes.item} activeClassName={classes.active}>Music</NavLink>
                </div>
                <div><NavLink to="/settings" className={classes.item}
                              activeClassName={classes.active}>Settings</NavLink>
                </div>

            </div>
            {/*<div><NavLink to="/friends"> <Friend /> </NavLink></div>*/}
        </nav>

    );
}

export default Nav;