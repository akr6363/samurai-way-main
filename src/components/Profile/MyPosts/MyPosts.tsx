import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {MyPostsFormDataType, MyPostsReduxForm} from "./MyPostsForm";


const  MyPosts = React.memo((props: MyPostsPropsType) =>{
    console.log('myposts')
    const onSubmit = (formData: MyPostsFormDataType,) => {
        console.log(formData)
        props.addPost(formData.post)

    }

    let postsElements = props.postsData
        .map(post => <Post key={post.id} message={post.message} likeCount={post.likeCount}/>)

    return (
        <div className={styles.posts}>
            <h2>My Posts</h2>
            <MyPostsReduxForm onSubmit={onSubmit}/>
            {postsElements}
        </div>
    );
})

export default MyPosts;