import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



// type ProfilePropsType = {
//     store: StoreType
// }

const Profile: React.FC<{  }> = ({}) => {
    return (
        <>
            <ProfileInfo/>
            <MyPostsContainer/>
        </>
    );
};

export default Profile;