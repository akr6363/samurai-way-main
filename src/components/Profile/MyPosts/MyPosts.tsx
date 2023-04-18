import React, {ChangeEvent, createRef} from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";

//
// type MyPostsPropsType = {
//     postsData: Array<PostsType>
//     newPostText: string
//     changeNewPostText(value: string): void
//     addPost(): void
// }

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const onAddPost = () => {
        props.addPost()
    }

    const changeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
         props.changeNewPostText(e.currentTarget.value)
    }

    let postsElements = props.postsData
        .map(post => <Post key={post.id} message={post.message} likeCount={post.likeCount}/>)

    return (
        <div className={styles.posts}>
            <h2>My Posts</h2>
            <textarea
                placeholder='your news'
                value={props.newPostText}
                onChange={changeTextHandler}/>
            <button onClick={onAddPost}>Send</button>
            {postsElements}
        </div>
    );
};

export default MyPosts;