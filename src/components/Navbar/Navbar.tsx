import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";
import {navBarType} from "../../redux/sidebar-reducer";
import {addPostAC, changeNewPostTextAC} from "../../redux/profile-reducer";
import MyPosts from "../Profile/MyPosts/MyPosts";
import {StoreContext} from "../../StoreContext";


// type NavbarPropsType = {
//     state: navBarType
// }


const Navbar: React.FC<{  }> = ({}) => {



    return (
        <StoreContext.Consumer>
            {(store) => {
                let friendsList = store.getState().navBar.friends
                    .map(friend => <Friend id={friend.id }key={friend.id} name={friend.name} photo={friend.photo}/>)

                return (
                    <nav className={styles.nav}>
                        <ul>
                            <li className={styles.item}>
                                <NavLink to="/profile" activeClassName={styles.active}>
                                    Profile
                                </NavLink>
                            </li>
                            <li className={styles.item}>
                                <NavLink to="/dialogs" activeClassName={styles.active}>
                                    Messages
                                </NavLink>
                            </li>
                            <li className={styles.item}>
                                <NavLink to="/news" activeClassName={styles.active}>
                                    News
                                </NavLink>
                            </li>
                            <li className={styles.item}>
                                <NavLink to="#">
                                    Music
                                </NavLink>
                            </li>
                            <li className={styles.item}>
                                <NavLink to="#">
                                    Settings
                                </NavLink>
                            </li>
                        </ul>
                        <div>
                            <h2>Friends</h2>
                            <div className={styles.nav__friends}>
                                {friendsList}
                            </div>
                        </div>
                    </nav>
                )
            }}
        </StoreContext.Consumer>

    );
};

export default Navbar;