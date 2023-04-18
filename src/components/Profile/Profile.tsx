import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



const Profile: React.FC<{}> = ({}) => {
    return (
        <>
            <ProfileInfo/>
            <MyPostsContainer/>
        </>
    );
};

export default Profile;