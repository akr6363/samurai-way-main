import React, {ChangeEvent} from "react";
import styled from "styled-components";
import {updateStatusTC} from "../../../redux/profile-reducer";

type ProfileStatusPropsType = {
    status: string
    updateStatus(status: string): void
}

type StateType = {
    editMode: boolean,
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state: StateType = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
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

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<StateType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <ProfileStatusBlock>
                {this.state.editMode
                    ? <StatusInput autoFocus type="text" value={this.state.status}
                                   onBlur={this.deactivateEditMode}
                                   onChange={this.onChangeStatus}/>
                    : <StatusSpan onDoubleClick={this.activateEditMode}

                    >{this.props.status || 'No status'}</StatusSpan>
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
