import React from 'react';
import styles from './Post.module.css'

const Post = () => {
    return (
        <div className={styles.post}>
            <div className={styles.post__photo}>
                <img
                    src="https://www.passion.ru/thumb/1280x720/smart/filters:quality(75)/imgs/2022/01/11/06/5160638/4d72f0fcf43671231996e69d245675b0601feb6e.jpg"
                    alt=""/>
            </div>
            <p>text</p>
            {/*<div>like</div>*/}
        </div>
    );
};

export default Post;