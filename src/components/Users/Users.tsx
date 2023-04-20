import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styled from "styled-components";
import AndrewPhoto from "../../img/friends/Andrew.png";

const Users: React.FC<UsersPropsType> = (props) => {

    if (!props.users.length) {
        props.setUsers([
            {
                id: 1, isFollowed: true, fullName: 'Oleg', status: 'I am happy',
                address: {city: 'Minsk', country: 'Belarus'},
                photo: AndrewPhoto
            },
            {
                id: 2, isFollowed: false, fullName: 'Dima', status: 'I am a boss',
                address: {city: 'Moscow', country: 'Russia'},
                photo: AndrewPhoto
            },
            {
                id: 3, isFollowed: true, fullName: 'Vasya', status: 'All are cool',
                address: {city: 'Perm', country: 'Russia'},
                photo: AndrewPhoto
            },
        ])
    }


    const usersItems = props.users.map(u=> {
        return (
            <UserItem>
                <UserLeft>
                    <UserImg>
                        <img src={u.photo} alt="users photo"/>
                    </UserImg>
                    {u.isFollowed
                    ?  <FollowBtn onClick={()=> props.unFollow(u.id)}>Unfollow</FollowBtn>
                    : <FollowBtn onClick={()=> props.follow(u.id)}>Follow</FollowBtn>}
                </UserLeft>
                <UserRight>
                    <h3>{u.fullName}</h3>
                    <div>{u.status}</div>
                    <div>{u.address.country}, {u.address.city}</div>
                </UserRight>
            </UserItem>
        )
    })

    return (
        <UsersPage>
            {usersItems}
        </UsersPage>
    );
};

export default Users;

const UserItem = styled.div `
    display: flex;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const UserLeft = styled.div `
    display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`

const UserRight = styled.div `
`

const UserImg = styled.div `
    width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 10px;
  & img {
    width: 100%;
    
  }
`
const FollowBtn = styled.button `
`
const UsersPage = styled.div `
  padding: 10px 10px;
`