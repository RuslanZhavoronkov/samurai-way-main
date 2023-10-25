import axios from "axios";
import { ResponseTypeFollowUnfollow, UsersServerType } from "../redux/usersReducer";
import { ProfileServerType } from "../redux/profileReducer";
import { ResponseAuthMeServer } from "../redux/authReducer";



const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '559562a7-157b-436b-9ddd-885f8624a836'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})




export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersServerType>(`users?page=${currentPage}&count${pageSize}`)
            .then((response) => {
                return response.data
            })
    },

    followPost(userId: number) {
        return instance.post<ResponseTypeFollowUnfollow>(`follow/${userId}`, {})
            .then((response) => {
                return response.data.resultCode
            })
    },

    unfollowDelete(userId: number) {
        return instance.delete<ResponseTypeFollowUnfollow>(`follow/${userId}`)
            .then((response) => {
                return response.data.resultCode
            })
    }
}


export const authAPI = {
    processAuthorization() {
        return instance.get<ResponseAuthMeServer>(`auth/me`)
            .then((response) => {
                return response.data
            })
    },
    loginIn (requestPayloadLoginIn:RequestPayloadLoginInType){
        return instance.post<ResponseUpdateStatus>(`auth/login`, requestPayloadLoginIn)
    },
    loginOut() {
        return instance.delete<ResponseUpdateStatus>(`auth/login`)
    }
}


export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get<ProfileServerType>(`profile/${userId}`)
            .then((response) => {
                return response.data
            })
    },
    getStatus(userId: string) {
        return instance.get<string>(`profile/status/${userId}`)
        .then ((response)=> {
            return response.data
        })
    },
    updateStatus(status: string) {
        return instance.put<ResponseUpdateStatus>(`profile/status`, {status})
    }
}

//type
type ResponseUpdateStatus = {
    resultCode: number
    messages: string[]
    data: {}
}

export type RequestPayloadLoginInType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}

// export const followAPI = {
//     followPost(userId: number) {
//         return instance.post<ResponseTypeFollowUnfollow>(`follow/${userId}`, {})
//             .then((response) => {
//                 return response.data.resultCode
//             })
//     },

//     unfollowDelete(userId: number) {
//         return instance.delete<ResponseTypeFollowUnfollow>(`follow/${userId}`)
//         .then((response) => {
//             return response.data.resultCode
//         })
//     }
// }




//_____________________________________________________________________________
// const config: AxiosRequestConfig = {
//     withCredentials: true,
//     headers: {
//         'API-KEY': '559562a7-157b-436b-9ddd-885f8624a836'
//     }
// }