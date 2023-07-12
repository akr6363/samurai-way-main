import React from 'react';
import styles from '../FriendsNavBar.module.scss'
import {hrHR} from "@mui/material/locale";
import {NavLink} from "react-router-dom";

type FriendPropsType = {
    id: number
    name: string
    photo?: string
}

const Friend: React.FC<FriendPropsType> = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={styles.friendLInk}>
            <div className={styles.friendContainer}>
                <div className={styles.photo}>
                    <img src={props.photo} alt=""/>
                </div>
                <div className={styles.name}>{props.name}</div>
            </div>
        </NavLink>

    );
};

export default Friend;