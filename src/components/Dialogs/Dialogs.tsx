import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = () => {
    return (
        <div className={styles.page}>
            <div className={styles.page__dialogs}>
                <div className={styles.dialog}>
                    <NavLink to="#"> Sveta </NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="#"> Dima </NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="#"> Igor </NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="#"> Oksana </NavLink>
                </div>
            </div>
            <div className={styles.page__messages}>
                <div className={styles.message}>
                    Hi
                </div>
                <div className={styles.message}>
                    How are you?
                </div>
                <div className={styles.message}>
                    Im fine motherfuker
                </div>
            </div>
        </div>
    );
};

export default Dialogs;