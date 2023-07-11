import React from 'react';
import Friend from "../Navbar/Friend/Friend";
import styles from './FriendsNavBar.module.scss'
import {friendsType} from "../../redux/sidebar-reducer";

type FriendsNavBarPropsType = {
    friends: Array<friendsType>
}

export const FriendsNavBar: React.FC<FriendsNavBarPropsType> = ({friends}) => {

    const friendsList = friends
        .map(friend => <Friend id={friend.id} key={friend.id} name={friend.name} photo={friend.photo}/>)


    return (
        <div className={styles.friendNavBar}>
            <h2>Friends</h2>
            <div className={styles.nav__friends}>
                {friendsList}
            </div>
        </div>
    );
};

export default FriendsNavBar;

