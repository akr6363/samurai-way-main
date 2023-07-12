import axios from "axios";
import {ProfileType} from "../redux/profile-reducer";
import {UserType} from "../redux/users-reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '18f6704c-b342-412b-afac-2949b9a3d1f5'
    }
})

type getUsersResponseType = {
    error: null | string
    items: UserType[]
    totalCount: number
}

export type ResponseType<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

type AuthType = {
    id: number
    email: string
    login: string
}

export type LoginRequestType = {
    email: string
    password: string
    rememberMe: boolean
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, friend?: boolean, term?: string) {
        return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}&friend=${friend}&term=${term}`)
            .then(response => response.data)
    },
    unfollow(id: number) {
        return instance.delete<ResponseType>(`follow/${id}`)
            .then(response => response.data)
    },
    follow(id: number) {
        return instance.post<ResponseType>(`follow/${id}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status})
            .then(response => {
                return response.data
            })
    },
}

export const authAPI = {
    auth() {
        return instance.get<ResponseType<AuthType>>(`auth/me`)
            .then(response => response.data)
    },
    login(loginData: LoginRequestType) {
        return instance.post<ResponseType<{ userId: number }>>(`auth/login`, loginData)
            .then(response => response.data)
    },
    logout() {
        return instance.delete<ResponseType<{ userId: number }>>(`auth/login`)
            .then(response => response.data)
    }
}