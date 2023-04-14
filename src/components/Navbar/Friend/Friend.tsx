import React from 'react';
import styles from './Friend.module.css'

type FriendPropsType = {
    id: number
    name: string
    photo: string
}

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