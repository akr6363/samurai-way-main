import React from 'react';
import NavDialogsItem from "./navDialogsItem/NavDialogsItem";
import styles from './NavDialogs.module.scss'
import {friendsType} from "../../../redux/sidebar-reducer";
import {DialogsType} from "../../../redux/dialogs-reducer";
import {NavLink} from "react-router-dom";

type FriendsNavBarPropsType = {
    friends: DialogsType[]
}

export const NavDialogs: React.FC<FriendsNavBarPropsType> = ({friends}) => {

    const friendsList = friends.map(friend => {
        return (
            <NavLink to={`/dialogs/${friend.id}`} className={styles.friendLInk}>
                <NavDialogsItem id={friend.id} key={friend.id} name={friend.name} photo={friend.photo}/>
            </NavLink>
        )
    })


    return (
        <div className={styles.friendNavBar}>
            <h2 className={styles.friendNavBar__title}>Dialogs</h2>
            <div className={styles.nav__friends}>
                {friendsList}
            </div>
        </div>
    );
};

export default NavDialogs;

