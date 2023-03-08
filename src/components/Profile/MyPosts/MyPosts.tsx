import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";



type MyPostsPropsType = {
    postsData: Array<PostsType>
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.postsData
        .map(post => <Post key={post.id} message={post.message} likeCount={post.likeCount}/>)

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