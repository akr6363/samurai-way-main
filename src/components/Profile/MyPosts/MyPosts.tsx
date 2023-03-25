import React, {createRef} from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";


type MyPostsPropsType = {
    postsData: Array<PostsType>
    addPost: () => void
    changeNewPostText: (value: string) => void
    newPostText: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const newPostRef = createRef<HTMLTextAreaElement>()

    const addPost = () => {
            props.addPost()
    }

    const changeTextHandler = () => {
        if (newPostRef.current) {
            props.changeNewPostText(newPostRef.current.value)
        }
    }

    let postsElements = props.postsData
        .map(post => <Post key={post.id} message={post.message} likeCount={post.likeCount}/>)

    return (
        <div className={styles.posts}>
            <h2>My Posts</h2>
            <textarea ref={newPostRef}
                      placeholder='your news'
                      value={props.newPostText}
                      onChange={changeTextHandler}/>
            <button onClick={addPost}>Send</button>
            {postsElements}
        </div>
    );
};

export default MyPosts;