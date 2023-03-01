import React from 'react';
import styles from './Profile.module.css'

const Profile = () => {
    return (
        <div className={styles.content}>
            <div className={styles.banner}>
                <img
                    src="https://kartinkin.net/pics/uploads/posts/2022-07/thumbs/1657890802_22-kartinkin-net-p-flamingo-v-krimu-zhivotnie-krasivo-foto-22.jpg"
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
            <div className={styles.posts}>
                <h2>My Posts</h2>
                <textarea placeholder='your news'></textarea>
                <button>Send</button>
                <div className={styles.post}>
                    <div className={styles.post__photo}>
                        <img
                            src="https://www.passion.ru/thumb/1280x720/smart/filters:quality(75)/imgs/2022/01/11/06/5160638/4d72f0fcf43671231996e69d245675b0601feb6e.jpg"
                            alt=""/>
                    </div>
                    <p>text</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;