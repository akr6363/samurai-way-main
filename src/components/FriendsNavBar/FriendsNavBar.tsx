import React from 'react';
import Friend from "./Friend/Friend";
import styles from './FriendsNavBar.module.scss'
import {friendsType} from "../../redux/sidebar-reducer";
import {DialogsType} from "../../redux/dialogs-reducer";

type FriendsNavBarPropsType = {
    friends: DialogsType[]
}

export const FriendsNavBar: React.FC<FriendsNavBarPropsType> = ({friends}) => {

    const friendsList = friends
        .map(friend => <Friend id={friend.id} key={friend.id} name={friend.name} photo={friend.photo}/>)


    return (
        <div className={styles.friendNavBar}>
            <h2 className={styles.friendNavBar__title}>Friends</h2>
            <div className={styles.nav__friends}>
                {friendsList}
            </div>
        </div>
    );
};

export default FriendsNavBar;

