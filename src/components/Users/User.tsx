import React from 'react';
import {NavLink} from "react-router-dom";
import userPhoto from "../../img/userPhoto.jpg";
import styled from "styled-components";
import {UserType} from "../../redux/users-reducer";


type UserPropsType = {
    user: UserType
    followingInProgress: number[]
    unfollowTC(userId: number): void
    followTC(userId: number): void
}

export const User: React.FC<UserPropsType> = ({user, followingInProgress, followTC, unfollowTC}) => {
    return (
        <UserItem>
            <UserLeft>
                <UserImg>

                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos?.small ?? userPhoto} alt='users photo'/>
                    </NavLink>
                </UserImg>
                {user.followed
                    ? <FollowBtn
                        disabled={followingInProgress.some(el => el === user.id)}
                        onClick={() => {
                            unfollowTC(user.id)
                        }}>Unfollow</FollowBtn>

                    : <FollowBtn
                        disabled={followingInProgress.some(el => el === user.id)}
                        onClick={() => {
                            followTC(user.id)
                        }}>Follow</FollowBtn>}
            </UserLeft>
            <UserRight>
                <h3>{user.name}</h3>
                <div>{user.status}</div>
            </UserRight>
        </UserItem>
    );
};


const UserItem = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const UserLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`

const UserRight = styled.div`
`

const UserImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 10px;

  & img {
    width: 100%;

  }
`
const FollowBtn = styled.button`
`
