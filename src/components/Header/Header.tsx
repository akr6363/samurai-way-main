import React from 'react';
import styles from './Header.module.scss'
import {NavLink, Redirect} from "react-router-dom";
import Banner from '../../img/banner.jpg'


type HeaderPropsType = {
    isAuth: boolean
    login: string | null

}


const Header: React.FC<HeaderPropsType> = ({isAuth, login}) => {



    return (
        <header className={styles.header}>
            <div className={styles.headerBannerContainer}>
                <img src={Banner} alt="" className={styles.headerBanner}/>
            </div>
            <div className={`container ${styles.headerContainer}`}>
                {/*<img className={styles.logo} src="https://free-png.ru/wp-content/uploads/2021/07/free-png.ru-53.png"*/}
                {/*     alt="logo"/>*/}
                {/*<div>*/}
                {/*    {isAuth*/}
                {/*        ? login*/}
                {/*        : <NavLink to="/login">Login</NavLink>}*/}

                {/*</div>*/}

            </div>
        </header>
    );
};

export default Header;