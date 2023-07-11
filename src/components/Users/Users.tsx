import React from 'react';
import styled from 'styled-components';
import {UsersPageType} from '../../redux/users-reducer';
import {Preloader} from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import {User} from "./User/User";
import {NavLink} from "react-router-dom";
import styles from "./Users.module.scss";
import Button from "@mui/material/Button";

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import {usersPageType} from "./UsersContainer";
import {Pagination} from "@mui/material";

export type UsersPropsType = UsersPageType & {
    selectPage(pageNumber: number): void
    unfollowTC(userId: number): void
    followTC(userId: number): void
    page: usersPageType
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
        followTC,
        page
    }) => {

    const usersItems = users.map(u => {
        return (
            <User key={u.id} user={u} followingInProgress={followingInProgress}
                  unfollowTC={unfollowTC} followTC={followTC}/>
        )
    })


    return (
        <div className={styles.usersPage}>
            <div className={styles.usersPage_nav}>
            <Button variant={page === 'friends' ? 'contained':"text" } className={`${styles.usersPage__btn}`}>
                <NavLink to="/users/friends" className={`${styles.usersPage__btn_link}`}>
                    Friends
                </NavLink>
            </Button>
            <Button variant={page === 'find'?'contained':"text"} className={styles.usersPage__btn}>
                <NavLink to="/users/all" className={styles.usersPage__btn_link}>
                    All users
                </NavLink>
            </Button>
            <Paper
                component="form"
                sx={{p: '2px 4px', display: 'flex', alignItems: 'center', flex: '1 1 auto'}}
            >
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    placeholder="Search user.."
                    inputProps={{'aria-label': 'search google maps'}}
                />
                <SearchIcon  sx={{color: 'gray'}}/>
            </Paper>
            </div>
            <UsersPage>
                {isFetching
                    ? <Preloader/>
                    : usersItems}
            </UsersPage>
            <Paginator pageItemsCount={pageTotalCount} pageSize={pageSize} selectPage={selectPage}
                       currentPage={currentPage}/>
        </div>
    )
}

const UsersPage = styled.div`
  padding: 10px 10px;
`

