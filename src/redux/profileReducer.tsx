import { Dispatch } from "redux";
import { PhotoType } from "./usersReducer";
import { AppActionsType } from "./redux-store";
import { profileAPI } from "../api/api";

//initial state
const initialState = {
  posts: [
    { id: "1", message: "Hi, how are you ?", likesCount: "12 " },
    { id: "2", message: "Its my first post", likesCount: " 11" },
  ],
  profileFromServer: {
    aboutMe: "",
    contacts: {
      facebook: "",
      website: "",
      vk: "",
      twitter: "",
      instagram: "",
      youtube: "",
      github: "",
      mainLink: "",
    },
    lookingForAJob: true,
    lookingForAJobDescription: "",
    fullName: "",
    userId: 1,
    photos: {
      small: "",
      large: "",
    },
  },
  status: "",
};

//reducer
export const profileReducer = (
  state: ProfilePageType = initialState,
  action: ActionTypeProfile
): ProfilePageType => {
  switch (action.type) {
    case "profile/ADD-POST": {
      const newPost: PostType = {
        id: "3",
        message: action.newPostText,
        likesCount: "0",
      };
      return { ...state, posts: [...state.posts, newPost] };
    }

    case "profile/SET-SERVER-PROFILE": {
      return { ...state, profileFromServer: action.payload.serverProfile };
    }

    case "profile/GET-PROFILE-STATUS": {
      return { ...state, status: action.payload.status };
    }

    case "profile/GET-UPDATE-PROFILE-STATUS": {
      return { ...state, status: action.payload.status };
    }

    case "profile/DELETE-POST": {
      return {
        ...state,
        posts: state.posts.filter((el) => el.id !== action.payload.id),
      };
    }

    case "profile/UPDATE-MY-AVATAR-PHOTO": {
      return {...state, profileFromServer: 
        {...state.profileFromServer, photos:
           {...state.profileFromServer.photos, large: action.payload.image}}}
    }
    default: {
      return state;
    }
  }
};

//action-creator
export const addPostAC = (newPostText: string) => {
  return {
    type: "profile/ADD-POST",
    newPostText,
  } as const;
};

export const setServerProfileAC = (serverProfile: ProfileServerType) => {
  return {
    type: "profile/SET-SERVER-PROFILE",
    payload: {
      serverProfile,
    },
  } as const;
};

export const getProfileStatusAC = (status: string) => {
  return {
    type: "profile/GET-PROFILE-STATUS",
    payload: {
      status,
    },
  } as const;
};

export const updateProfileStatusAC = (status: string) => {
  return {
    type: "profile/GET-UPDATE-PROFILE-STATUS",
    payload: {
      status,
    },
  } as const;
};

export const deletePostAC = (id: string) => {
  return {
    type: "profile/DELETE-POST",
    payload: {
      id,
    },
  } as const;
};

export const updateMyAvatarPhotoAC = (image: string) => {
  return {
    type: "profile/UPDATE-MY-AVATAR-PHOTO",
    payload: {
      image
    }
  } as const
} 

//thunk

export const updateMyAvatarPhotoTC = 
(image: File) => async(dispatch: Dispatch<AppActionsType>) => {
  try {
const response = await profileAPI.updateMyAvatarPhoto(image)
if (response.data.resultCode === 0) {
  dispatch(updateMyAvatarPhotoAC(response.data.data.large))
}
  }
  catch (e) {
alert ('No photo')
  }

}

export const getUserProfileTC =
  (userId: string | undefined) =>
  async (dispatch: Dispatch<AppActionsType>) => {
    try {
      const data = await profileAPI.getUserProfile(userId);
      dispatch(setServerProfileAC(data));
    } catch (e) {
      alert("WARNING ERROR");
    }
  };

export const getProfileStatusTC =
  (userId: string | undefined) => async (dispatch: Dispatch) => {
    try {
      const response = await profileAPI.getStatus(userId);
      dispatch(getProfileStatusAC(response));
    } catch (e) {
      alert("WARNING ERROR");
    }
  };

export const updateProfileStatusTC =
  (status: string) => async (dispatch: Dispatch) => {
    try {
      const response = await profileAPI.updateStatus(status);
      if (response.data.resultCode === 0) {
        dispatch(updateProfileStatusAC(status));
      }
    } catch (e) {
      alert("WARNING ERROR");
    }
  };

//type
export type PostType = {
  id: string;
  message: string;
  likesCount: string;
};

type ContactsProfileType = {
  facebook: string | null;
  website: string | null;
  vk: string | null;
  twitter: string | null;
  instagram: string | null;
  youtube: string | null;
  github: string | null;
  mainLink: string | null;
};

export type ProfileServerType = {
  aboutMe: string;
  contacts: ContactsProfileType;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: PhotoType;
};

export type ProfilePageType = {
  posts: PostType[];
  profileFromServer: ProfileServerType;
  status: string;
};

export type UpdateMyAvatarPhotoACType = ReturnType<typeof updateMyAvatarPhotoAC>
export type AddPostACType = ReturnType<typeof addPostAC>;
export type SetServerProfileACType = ReturnType<typeof setServerProfileAC>;
export type GetProfileStatusACType = ReturnType<typeof getProfileStatusAC>;
export type UpdateProfileStatusACType = ReturnType<
  typeof updateProfileStatusAC
>;
export type DeletePostACType = ReturnType<typeof deletePostAC>;
export type ActionTypeProfile =
  | AddPostACType
  | SetServerProfileACType
  | GetProfileStatusACType
  | UpdateProfileStatusACType
  | DeletePostACType
  | UpdateMyAvatarPhotoACType;
