import React from 'react';
import userPhoto from '../../img/userPhoto.jpg';
import styled from 'styled-components';
import {UsersPageType} from '../../redux/users-reducer';
import {Preloader} from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

export type UsersPropsType = UsersPageType & {
    follow(userID: number): void
    unFollow(userID: number): void
    selectPage(pageNumber: number): void
    toggleFollowingProgress(isFetching: boolean, userID: number): void
}

export const Users: React.FC<UsersPropsType> = (
    {
        users,
        pageTotalCount,
        pageSize,
        currentPage,
        isFetching,
        follow,
        unFollow,
        selectPage,
        followingInProgress,
        toggleFollowingProgress
    }) => {
    const usersItems = users.map(u => {
        return (
            <UserItem key={u.id}>
                <UserLeft>
                    <UserImg>
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos?.small ?? userPhoto} alt='users photo'/>
                        </NavLink>
                    </UserImg>
                    {u.followed
                        ? <FollowBtn
                            disabled={followingInProgress.some(el => el === u.id)}
                            onClick={() => {
                                toggleFollowingProgress(true, u.id)
                                usersAPI.unfollow(u.id)
                                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    // {
                                    //     withCredentials: true,
                                    //     headers: {
                                    //         'API-KEY': '18f6704c-b342-412b-afac-2949b9a3d1f5'
                                    //     }
                                    // })
                                    .then((response) => {
                                        if (response.resultCode === 0) {
                                            unFollow(u.id)
                                        }
                                        toggleFollowingProgress(false, u.id)
                                    })
                            }}>Unfollow</FollowBtn>

                        : <FollowBtn
                            disabled={followingInProgress.some(el => el === u.id)}
                            onClick={() => {
                                toggleFollowingProgress(true, u.id)
                                usersAPI.follow(u.id)
                                    .then((response) => {
                                        if (response.resultCode === 0) {
                                            follow(u.id)
                                        }
                                        toggleFollowingProgress(false, u.id)
                                    })

                            }}>Follow</FollowBtn>}
                </UserLeft>
                <UserRight>
                    <h3>{u.name}</h3>
                    <div>{u.status}</div>
                </UserRight>
            </UserItem>
        )
    })

    const getPageNumbers = () => {
        const pageCount = Math.ceil(pageTotalCount / pageSize)
        let numbersArray = []
        for (let i = 1; i <= pageCount; i++) {
            numbersArray.push(i)
        }
        return numbersArray.map(p => {
            return (
                <PaginationItem key={p}
                                className={currentPage === p ? 'current' : ''}
                                onClick={() => {
                                    selectPage(p)
                                }}>
                    {p}</PaginationItem>
            )
        })
    }


    return (
        <>
            <Pagination>
                {getPageNumbers()}
            </Pagination>
            <UsersPage>
                {isFetching
                    ? <Preloader/>
                    : usersItems}
            </UsersPage>
        </>
    )
}


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
const UsersPage = styled.div`
  padding: 10px 10px;
`

const Pagination = styled.div`

`
const PaginationItem = styled.span`
  &.current {
    font-weight: bold;
  }
`
