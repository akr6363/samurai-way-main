import React from 'react';
import styles from './NavDialogsItem.module.scss'
import {hrHR} from "@mui/material/locale";
import {NavLink} from "react-router-dom";

type FriendPropsType = {
    id: number
    name?: string
    photo?: string
}

const NavDialogsItem: React.FC<FriendPropsType> = (props) => {
    return (
            <div className={styles.friendContainer}>
                <div className={styles.photo}>
                    <img src={props.photo} alt=""/>
                </div>
                <div className={styles.name}>{props.name}</div>
            </div>
    );
};

export default NavDialogsItem;