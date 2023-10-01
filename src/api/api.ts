import axios, { AxiosRequestConfig } from "axios";
import { ResponseTypeFollowUnfollow, UsersServerType } from "../redux/usersReducer";
import { ProfileServerType } from "../redux/profileReducer";



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



export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get<ProfileServerType>(`profile/${userId}`)
            .then((response) => {
                return response.data
            })
    }
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