import React, {ChangeEvent} from 'react';
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
import SearchIcon from '@mui/icons-material/Search';
import {usersPageType} from "./UsersContainer";
import {getRandomString} from "../common/utils/getRandomString";


export type UsersPropsType = UsersPageType & {
    selectPage(pageNumber: number): void
    unfollowTC(userId: number): void
    followTC(userId: number): void
    page: usersPageType
    searchValue: string,
    onChangeValue(newValue: string): void
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
        page,
        searchValue,
        onChangeValue
    }) => {




    const usersItems = users.map(u => {
        return (
            <User key={u.id} user={u} followingInProgress={followingInProgress}
                  unfollowTC={unfollowTC} followTC={followTC}/>
        )
    })

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeValue(e.currentTarget.value)
  }


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
                    placeholder="Search users.."
                    inputProps={{'aria-label': 'search users'}}
                    value={searchValue}
                    onChange={onChangeHandler}
                />
                <SearchIcon  sx={{color: 'gray'}}/>
            </Paper>
            </div>
            <UsersPage>
                {isFetching
                    ? <div className={'page'} style={{minHeight: '100vh'}}><Preloader/></div>
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

