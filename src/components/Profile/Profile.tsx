import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";


type ProfilePropsType = {
    state: profilePageType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <>
            <ProfileInfo/>
            <MyPosts postsData={props.state.postsData}/>
        </>
    );
};

export default Profile;