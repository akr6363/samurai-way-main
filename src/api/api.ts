import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '18f6704c-b342-412b-afac-2949b9a3d1f5'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data )
    },
    unfollow(id: number) {
       return  instance.delete(`follow/${id}`)
           .then(response => response.data )
    },
    follow(id: number) {
        return  instance.post(`follow/${id}`)
            .then(response => response.data )
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data )
    }
}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
            .then(response => response.data )
    }
}