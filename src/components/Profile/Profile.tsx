import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../index";

type ProfilePropsType = {
    postsData: Array<PostsType>
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </>
    );
};

export default Profile;