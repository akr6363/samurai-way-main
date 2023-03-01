import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="https://free-png.ru/wp-content/uploads/2021/07/free-png.ru-53.png" alt="logo"/>
        </header>
    );
};

export default Header;