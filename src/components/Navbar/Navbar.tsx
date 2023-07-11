import React from 'react';
import styles from './Navbar.module.scss'
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";
import {ReactComponent as IconProfile} from "../../img/icons/navbar/profile.svg";
import {ReactComponent as IconMessages} from "../../img/icons/navbar/messages.svg";
import {ReactComponent as IconFriends} from "../../img/icons/navbar/friends.svg";
import {ReactComponent as IconPhotos} from "../../img/icons/navbar/photo.svg";
import {ReactComponent as IconSettings} from "../../img/icons/navbar/settings.svg";
import {ReactComponent as IconNews} from "../../img/icons/navbar/news.svg";
import LogoutIcon from '@mui/icons-material/Logout';

import {NavBarPropsType} from "./NavbarContainer";
import Button from "@mui/material/Button";


const Navbar: React.FC<NavBarPropsType> = ({logoutTC}) => {

    const onLogout = () => {
        logoutTC()
    }


    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.item}>
                    <NavLink to="/profile" activeClassName={styles.active}>
                       <IconProfile/>Profile
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/dialogs" activeClassName={styles.active}>
                        <IconMessages/> Messages
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/news" activeClassName={styles.active}>
                        <IconNews/>News
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/users/friends" activeClassName={styles.active}>
                        <IconFriends/>Users
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="#">
                        <IconSettings/> Settings
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="#">
                        <IconPhotos/> Photo
                    </NavLink>
                </li>
                <hr/>
                 <Button onClick={onLogout} startIcon={<LogoutIcon />}>Log out</Button>
            </ul>

        </nav>
    )

};

export default Navbar;