import React from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}


const Header: React.FC<HeaderPropsType> = ({isAuth, login}) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="https://free-png.ru/wp-content/uploads/2021/07/free-png.ru-53.png" alt="logo"/>
            <div>
                {isAuth
                ? login
                :   <NavLink to="/login">Login</NavLink>}

            </div>
        </header>
    );
};

export default Header;