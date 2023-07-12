import React from 'react';
import {NavLink} from "react-router-dom";
import userPhoto from "../../../img/userPhoto.jpg";
import styled from "styled-components";
import {UserType} from "../../../redux/users-reducer";
import styles from './User.module.scss'
import Button from "@mui/material/Button";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {getRandomString} from "../../common/utils/getRandomString";

type UserPropsType = {
    user: UserType
    followingInProgress: number[]
    unfollowTC(userId: number): void
    followTC(userId: number): void
}



export const User: React.FC<UserPropsType> = React.memo(({user, followingInProgress, followTC, unfollowTC}) => {
    return (
        <>
            <div className={styles.user}>
                <div className={styles.user__photoContainer}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos?.small ?? userPhoto} alt='users photo'/>
                    </NavLink>
                </div>
                <div className={styles.user__infoContainer}>
                    <h3 className={styles.user__title}>{user.name}</h3>
                    {/*<div>{user.status ? user.status : 'No status'}</div>*/}
                    <div className={styles.user__location}>
                        <LocationOnIcon className={styles.user__locationIcon}/>
                        <div className={styles.user__locationCity}>{user.city}</div>
                    </div>
                </div>
                <div  className={styles.userActions}>
                    <Button
                        disabled={followingInProgress.some(el => el === user.id)}
                        onClick={() => {
                            user.followed ? unfollowTC(user.id) : followTC(user.id)
                        }}
                        variant={'outlined'}
                        size={'small'}
                        className={styles.userActionsBtn}
                    >
                        {user.followed ? 'Unfollow' : 'Follow'}

                    </Button>

                    {user.followed && <Button variant={'outlined'}
                                              size={'small'}
                                              className={styles.userActionsBtn}>
                        Send Message
                    </Button>}
                </div>
            </div>
            <hr/>
        </>
    );
})


