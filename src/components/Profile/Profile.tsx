import React, {useState} from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus(status: string): void
}

const Profile: React.FC<ProfilePropsType> = ({profile, status, updateStatus}) => {

    return (
            <>
                <ProfileInfo profile={profile} status={status}  updateStatus={updateStatus}/>
                <MyPostsContainer/>
            </>

    );
};

export default Profile;