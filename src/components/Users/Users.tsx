import React, {useEffect} from 'react';
import {UsersPropsType} from "./UsersContainer";
import styled from "styled-components";
import userPhoto from "../../img/userPhoto.jpg";
import axios from "axios";


const Users: React.FC<UsersPropsType> = (props) => {
    // useEffect(() => {
    //     if (!props.users.length) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //             .then(response => {
    //                 props.setUsers(response.data.items)
    //             })
    //     }
    // }, []);
    const getUsers = () => {
        if (!props.users.length) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }

    }

    const usersItems = props.users.map(u => {
        return (
            <UserItem key={u.id}>
                <UserLeft>
                    <UserImg>
                        <img src={u.photos?.small ?? userPhoto} alt="users photo"/>
                    </UserImg>
                    {u.followed
                        ? <FollowBtn onClick={() => props.unFollow(u.id)}>Unfollow</FollowBtn>
                        : <FollowBtn onClick={() => props.follow(u.id)}>Follow</FollowBtn>}
                </UserLeft>
                <UserRight>
                    <h3>{u.name}</h3>
                    <div>{u.status}</div>
                    {/*<div>{u.address.country}, {u.address.city}</div>*/}
                </UserRight>
            </UserItem>
        )
     })

    return (
        <>
            <button onClick={getUsers}>Get Users</button>
            <UsersPage>
                {usersItems}
            </UsersPage>
        </>

    );
};

export default Users;

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