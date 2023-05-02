import React from 'react';
import userPhoto from '../../img/userPhoto.jpg';
import styled from 'styled-components';
import {UserType} from '../../redux/users-reducer';
import {Preloader} from "../common/Preloader/Preloader";

export type UsersPropsType = {
    users: UserType[]
    pageTotalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    follow(userID: number): void
    unFollow(userID: number): void
    selectPage(pageNumber: number): void
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
        selectPage
    }) => {
    const usersItems = users.map(u => {
        return (
            <UserItem key={u.id}>
                <UserLeft>
                    <UserImg>
                        <img src={u.photos?.small ?? userPhoto} alt='users photo'/>
                    </UserImg>
                    {u.followed
                        ? <FollowBtn onClick={() => unFollow(u.id)}>Unfollow</FollowBtn>
                        : <FollowBtn onClick={() => follow(u.id)}>Follow</FollowBtn>}
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
