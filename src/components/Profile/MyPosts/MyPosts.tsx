import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div className={styles.posts}>
                <h2>My Posts</h2>
                <textarea placeholder='your news'></textarea>
                <button>Send</button>
                <Post/>
                <Post/>
                <Post/>
            </div>
    );
};

export default MyPosts;