import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


type ProfilePropsType = {
    profile: ProfileType | null

}

const Profile: React.FC<ProfilePropsType> = ({profile}) => {
    return (

            <>
                <ProfileInfo profile={profile}/>
                <MyPostsContainer/>
            </>

    );
};

export default Profile;