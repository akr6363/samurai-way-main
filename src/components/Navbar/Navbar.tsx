import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.item}><NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink></li>
                <li className={styles.item}><NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink></li>
                <li className={styles.item}><NavLink to="/news" activeClassName={styles.active}>News</NavLink></li>
                <li className={styles.item}><NavLink to="#">Music</NavLink></li>
                <li className={styles.item}><NavLink to="#">Settings</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;