import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followTC, requestUsers, unfollowTC, UsersPageType,} from "../../redux/users-reducer";
import {Users} from "./Users";
import {
    gePageTotalCount,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getUsersSuperSelector
} from "../../redux/users-selectors";

type StateType = {
    searchValue: string,
}

class UsersContainerAPI extends React.Component<UsersContainerPropsType> {

    state: StateType = {
        searchValue: '',
    }

    onChangeValue = (newValue: string) => {
        this.setState({
            searchValue: newValue,
        })
    }


    componentDidUpdate(prevProps: Readonly<UsersContainerPropsType>, prevState: Readonly<StateType>) {
        if (prevState.searchValue !== this.state.searchValue) {
            const {currentPage, pageSize} = this.props
            if (this.props.page === 'friends') {
                this.props.requestUsers(currentPage, pageSize, true, this.state.searchValue)
            }
            if (this.props.page === 'find') {
                this.props.requestUsers(currentPage, pageSize, undefined, this.state.searchValue)
            }
        }
    }


    componentDidMount() {
        const {currentPage, pageSize} = this.props
        if (this.props.page === 'friends') {
            this.props.requestUsers(currentPage, pageSize, true)
        }
        if (this.props.page === 'find') {
            this.props.requestUsers(currentPage, pageSize)
        }
    }

    selectPage = (pageNumber: number) => {
        const {pageSize} = this.props
        if (this.props.page === 'friends') {
            this.props.requestUsers(pageNumber, pageSize, true)
        }
        if (this.props.page === 'find') {
            this.props.requestUsers(pageNumber, pageSize)
        }

    }

    render() {
        return (<>
            <Users users={this.props.users}
                   pageTotalCount={this.props.pageTotalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   selectPage={this.selectPage}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
                   unfollowTC={this.props.unfollowTC}
                   followTC={this.props.followTC}
                   page={this.props.page}
                   searchValue={this.state.searchValue}
                   onChangeValue={this.onChangeValue}
            />
        </>)
    }
}

type mapDispatchReturnType = {
    requestUsers(currentPage: number, pageSize: number, friend?: boolean, term?: string): void
    unfollowTC(userId: number): void
    followTC(userId: number): void
}

export type usersPageType = 'friends' | 'find'

export type UsersContainerPropsType = UsersPageType & mapDispatchReturnType & { page: usersPageType }

const mapStateToProps = (state: AppStateType) => {
    return {
        // users: getUsers(state),
        users: getUsersSuperSelector(state),
        pageTotalCount: gePageTotalCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}

const mapDispatchToProps: mapDispatchReturnType = {
    requestUsers, unfollowTC, followTC
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)