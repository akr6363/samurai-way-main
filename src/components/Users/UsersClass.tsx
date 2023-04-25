import React from "react";
import userPhoto from "../../img/userPhoto.jpg";
import styled from "styled-components";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";

export class UsersClass extends React.Component<UsersPropsType> {

    // constructor(props: UsersPropsType) {
    //     super(props);
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //         .then(response => {
    //             this.props.setUsers(response.data.items)
    //         })
    // }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    //
   // getUsers = () => {
   //      if (!this.props.users.length) {
   //          axios.get('https://social-network.samuraijs.com/api/1.0/users')
   //              .then(response => {
   //                  this.props.setUsers(response.data.items)
   //              })
   //      }
   //
   //  }

    render() {
        const usersItems = this.props.users.map(u => {
            return (
                <UserItem key={u.id}>
                    <UserLeft>
                        <UserImg>
                            <img src={u.photos?.small ?? userPhoto} alt="users photo"/>
                        </UserImg>
                        {u.followed
                            ? <FollowBtn onClick={() => this.props.unFollow(u.id)}>Unfollow</FollowBtn>
                            : <FollowBtn onClick={() => this.props.follow(u.id)}>Follow</FollowBtn>}
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
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                <UsersPage>
                    {usersItems}
                </UsersPage>
            </>
        )
    }
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