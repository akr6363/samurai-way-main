import React, {createRef} from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";



type MyPostsPropsType = {
    postsData: Array<PostsType>
    addPost: (newPostMessage: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const newPostRef = createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostRef.current) {
            props.addPost(newPostRef.current.value)
        }
    }

    let postsElements = props.postsData
        .map(post => <Post key={post.id} message={post.message} likeCount={post.likeCount}/>)

    return (
        <div className={styles.posts}>
            <h2>My Posts</h2>
            <textarea ref={newPostRef} placeholder='your news'></textarea>
            <button onClick={addPost}>Send</button>
            {postsElements}

        </div>
    );
};

export default MyPosts;