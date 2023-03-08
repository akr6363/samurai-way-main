import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

type PostsType = {
    id: number
    message: string
    likeCount: number
}

let postsData: Array<PostsType> = [
    {id: 1, message: "Hi, how are you?", likeCount: 15},
    {id: 2, message: "It is my first post", likeCount: 20},
]

let postsElements = postsData
    .map(post => <Post key={post.id} message={post.message} likeCount={post.likeCount}/>)

const MyPosts = () => {
    return (
        <div className={styles.posts}>
            <h2>My Posts</h2>
            <textarea placeholder='your news'></textarea>
            <button>Send</button>
            {postsElements}

        </div>
    );
};

export default MyPosts;