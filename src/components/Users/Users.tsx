import React from 'react';
import styled from 'styled-components';
import {UsersPageType} from '../../redux/users-reducer';
import {Preloader} from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import {User} from "./User";

export type UsersPropsType = UsersPageType & {
    selectPage(pageNumber: number): void
    unfollowTC(userId: number): void
    followTC(userId: number): void
}

export const Users: React.FC<UsersPropsType> = (
    {
        users,
        pageTotalCount,
        pageSize,
        currentPage,
        isFetching,
        selectPage,
        followingInProgress,
        unfollowTC,
        followTC
    }) => {

    const usersItems = users.map(u => {
        return (
            <User user={u} followingInProgress={followingInProgress} unfollowTC={unfollowTC} followTC={followTC}/>
        )
    })

    return (
        <>
            <Paginator pageTotalCount={pageTotalCount} pageSize={pageSize} selectPage={selectPage}
                       currentPage={currentPage}/>
            <UsersPage>
                {isFetching
                    ? <Preloader/>
                    : {usersItems}
                }
            </UsersPage>
        </>
    )
}


const UsersPage = styled.div`
  padding: 10px 10px;
`

