import React from "react";
import styles from './DialogItem.module.css'
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: number
}


export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={`/dialogs/${props.id}`}> {props.name} </NavLink>
        </div>
    )
}