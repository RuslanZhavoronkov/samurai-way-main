import axios from "axios";
import {
  ResponseTypeFollowUnfollow,
  UsersServerType,
} from "../redux/usersReducer";
import { ProfileServerType } from "../redux/profileReducer";
import { ResponseAuthMeServer } from "../redux/authReducer";
import { ProfileDataFormType } from "../components/Profile/ProfileInfo/ProfileDataForm";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "559562a7-157b-436b-9ddd-885f8624a836",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const userAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get<UsersServerType>(`users?page=${currentPage}&count${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  followPost(userId: number) {
    return instance
      .post<ResponseTypeFollowUnfollow>(`follow/${userId}`, {})
      .then((response) => {
        return response.data.resultCode;
      });
  },

  unfollowDelete(userId: number) {
    return instance
      .delete<ResponseTypeFollowUnfollow>(`follow/${userId}`)
      .then((response) => {
        return response.data.resultCode;
      });
  },
};

export const authAPI = {
  processAuthorization() {
    return instance.get<ResponseAuthMeServer>(`auth/me`).then((response) => {
      return response.data;
    });
  },
  loginIn(requestPayloadLoginIn: RequestPayloadLoginInType) {
    return instance.post<ResponseUpdateStatus>(
      `auth/login`,
      requestPayloadLoginIn
    );
  },
  loginOut() {
    return instance.delete<ResponseUpdateStatus>(`auth/login`);
  },
};

export const profileAPI = {
  getUserProfile(userId: string | undefined) {
    return instance
      .get<ProfileServerType>(`profile/${userId}`)
      .then((response) => {
        return response.data;
      });
  },
  getStatus(userId: string | undefined) {
    return instance.get<string>(`profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },
  updateStatus(status: string) {
    return instance.put<ResponseUpdateStatus>(`profile/status`, { status });
  },
  updateMyAvatarPhoto(image: File) {
    const formData = new FormData();
    formData.append("image", image);
    return instance.put<ResponseUpdateMyAvatarPhoto>(
      `/profile/photo`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },
  saveProfileData(formData: ProfileDataFormType){
    return instance.put<ResponseUpdateStatus>(`profile`, formData);
  }
};

export const securityAPI = {
  getCaptchaUrl(){
    return instance.get<ResponsesecurityAPIType>(`security/get-captcha-url`)
  }
}



//type
type ResponsesecurityAPIType = {
  url: string
}


type ResponseUpdateStatus = {
  resultCode: number;
  messages: string[];
  data: {};
};

export type RequestPayloadLoginInType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: string;
};

type ResponseUpdateMyAvatarPhoto = {
  data: {
    photos: {
      small: string;
      large: string;
    };
  };
  resultCode: number;
  messages: number;
};
