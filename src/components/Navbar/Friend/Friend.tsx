import React from 'react';
import {friendsType} from "../../../redux/state";
import styles  from './Friend.module.css'

type FriendPropsType = friendsType

const Friend: React.FC<FriendPropsType> = (props) => {
    return (
        <div className={styles.friend}>
            <div className={styles.photo}>
                <img src={props.photo} alt=""/>
            </div>
            <div className={styles.name}>{props.name}</div>
        </div>
    );
};

export default Friend;