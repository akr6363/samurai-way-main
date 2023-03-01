import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div className={styles.posts}>
                <h2>My Posts</h2>
                <textarea placeholder='your news'></textarea>
                <button>Send</button>
                <Post message = "Hi, how are you?" likeCount={15}/>
                <Post message = "It is my first post" likeCount={20}/>

            </div>
    );
};

export default MyPosts;