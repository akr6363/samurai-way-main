import React, {ChangeEvent} from "react";
import styled from "styled-components";
import {updateStatusTC} from "../../../redux/profile-reducer";

type ProfileStatusPropsType = {
    status: string
    updateStatus(status: string): void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    // setEditMode(isEdit: boolean) {
    //     this.setState({
    //         editMode: isEdit
    //     })
    // }

    activateEditMode =() => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)

    }

    changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <ProfileStatusBlock>
                {this.state.editMode
                    ? <StatusInput autoFocus type="text" value={this.state.status}
                                   onBlur={this.deactivateEditMode}
                                   onChange={this.changeStatus}/>
                    : <StatusSpan onDoubleClick={this.activateEditMode}

                    >{this.props.status}</StatusSpan>
                }
            </ProfileStatusBlock>

        )
    }
}

const StatusSpan = styled.span`
  display: block;
  padding: 5px 10px;

  &:hover {
    background-color: rgba(161, 161, 161, 0.56);
  }
`
const StatusInput = styled.input`
  flex: 1 1 100%;
  padding: 5px 10px;
`


const ProfileStatusBlock = styled.div`
  display: flex;
  flex-direction: column;
`
