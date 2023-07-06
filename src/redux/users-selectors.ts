import {AppStateType} from "./redux-store";
import {UserType} from "./users-reducer";
import {createSelector} from "reselect";

export const getUsers = (state: AppStateType): UserType[] => {
    return state.usersPage.users
}

export const getIsFetching = (state: AppStateType): boolean => {
    return state.usersPage.isFetching
}


//библиотека reselect и функция createSelector используется для кеширования значений получаемых из стейта на основе зависимостей, при фильтрации или другой ситуации в которой на выходе мы получем новый объект, либо при выполнении сложных математических операций, чтобы не перерисовыать каждый раз компоненту, функция запоминает предыдущее значение и если зависимости не изменились, возвращает тот же результат сохраненный в памяти, запуская функцию только при изменени входных данных

export const getUsersSuperSelector = createSelector([getUsers, getIsFetching], (users, isFetching)=> {
    return users.filter(u=> true)
})

export const gePageTotalCount = (state: AppStateType): number => {
    return state.usersPage.pageTotalCount
}
export const getPageSize = (state: AppStateType): number => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state: AppStateType): number => {
    return state.usersPage.currentPage
}


export const getFollowingInProgress = (state: AppStateType): number[] => {
    return state.usersPage.followingInProgress
}