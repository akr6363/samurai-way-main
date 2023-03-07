import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <>
            <ProfileInfo/>
            <MyPosts/>
        </>
    );
};

export default Profile;