import styles from "./ProfileInfo.module.css";
import React from "react";
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile}) => {
    return (
        profile ?
        <>
            <div className={styles.banner}>
                <img
                    src="https://www.pavelin.ru/images/stories/flamingo/flam_003.jpg"
                    alt="" className="content__banner"/>
            </div>
            <div className={styles.user}>
                <div className={styles.user__photo}>
                    <img
                        src={profile.photos.large}
                        alt=""/>
                </div>
                <div className={styles.user__info}>
                    <h3>{profile.fullName}</h3>
                    <div>{profile.aboutMe}</div>
                </div>
            </div>
        </>
            : <Preloader/>
    )
}