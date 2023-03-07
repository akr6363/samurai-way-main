import styles from "./ProfileInfo.module.css";
import React from "react";

export const ProfileInfo = () => {
    return (
        <>
            <div className={styles.banner}>
                <img
                    src="https://www.pavelin.ru/images/stories/flamingo/flam_003.jpg"
                    alt="" className="content__banner"/>
            </div>
            <div className={styles.user}>
                <div className={styles.user__photo}>
                    <img
                        src="https://million-wallpapers.ru/wallpapers/2/49/9466422002144017775/kot-serditsya-na-xozyaina-i-pogodu.jpg"
                        alt=""/>
                </div>
                <div className={styles.user__info}>
                    <h3>Name</h3>
                    <div>descr</div>
                </div>
            </div>
        </>
    )
}