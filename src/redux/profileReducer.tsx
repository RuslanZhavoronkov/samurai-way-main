import { Dispatch } from "redux";
import { PhotoType } from "./usersReducer";
import { AppActionsType, AppDispatchType, AppRootStateType, AppThunkType } from "./redux-store";
import { profileAPI } from "../api/api";
import { ProfileDataFormType } from "../components/Profile/ProfileInfo/ProfileDataForm";
import { AxiosError } from "axios";
import { stopSubmit } from "redux-form";



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
  isEditMode: false
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
      console.log(action.payload);

      return {
        ...state,
        profileFromServer: {
          ...state.profileFromServer,
          photos: action.payload.photos,
        },
      };

      // return {...state, profileFromServer:
      //   {...state.profileFromServer, photos:
      //      {...state.profileFromServer.photos, large: action.payload.image}}}
    }
    case "SAVE-PROFILE-DATA": {
      return {...state, profileFromServer: {...state.profileFromServer,
         fullName: action.payload.formData.fullName,
        lookingForAJob: action.payload.formData.lookingForAJob,
        lookingForAJobDescription: action.payload.formData.lookingForAJobDescription,
        aboutMe: action.payload.formData.aboutMe
      }}
    }
case "profile/CHANGE-EDIT-MODE": {
  return {...state, isEditMode: action.payload.isEditMode}
}
    default: {
      return state;
    }
  }
};

//action-creator
export const changeEditModeAC = (isEditMode: boolean) => {
return {
  type: 'profile/CHANGE-EDIT-MODE',
  payload: {
    isEditMode: isEditMode
  }
} as const
}

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

export const updateMyAvatarPhotoAC = (photos: PhotoType) => {
  debugger
  return {
    type: "profile/UPDATE-MY-AVATAR-PHOTO",
    payload: {
      //image
      photos,
    },
  } as const;
};

export const saveProfileDataAC = (formData: ProfileDataFormType) => {
  return {
    type: 'SAVE-PROFILE-DATA',
    payload: {
      formData
    }
  } as const
}

//thunk
//(): AppThunkType => (dispatch:AppDispatchType)


export const saveProfileDataTC = 
(formData: ProfileDataFormType):AppThunkType => 
async (dispatch: AppDispatchType,getState:() => AppRootStateType) => {
  try {
    const userId = String(getState().auth.AuthInfoForRedux.data.id)
    const response = await profileAPI.saveProfileData(formData)
    if (response.data.resultCode === 0) {
      //dispatch(saveProfileDataAC(formData))
     dispatch(getUserProfileTC(userId))
     dispatch(changeEditModeAC(false))
    } else {
      let message =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error";
           // dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": response.data.messages[0]}}))
      dispatch(stopSubmit("edit-profile", { _error: message }))
     //return Promise.reject(response.data.messages[0])
      //alert(response.data.messages[0])
    }
  } catch (e) {
    const err = e as Error | AxiosError<{error:string}>
    alert(err.message);
  }
}



export const updateMyAvatarPhotoTC =
  (image: File) => async (dispatch: Dispatch<AppActionsType>) => {
    try {
      const response = await profileAPI.updateMyAvatarPhoto(image);
      if (response.data.resultCode === 0) {
        console.log(response.data.data);
        dispatch(updateMyAvatarPhotoAC(response.data.data.photos));
      }
    } catch (e) {
      alert("No photo");
    }
  };

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
  // facebook: string | null
  // website: string | null
  // vk: string | null;
  // twitter: string | null;
  // instagram: string | null;
  // youtube: string | null;
  // github: string | null;
  // mainLink: string | null;
  [key: string]:string
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
  status: string
  isEditMode: boolean
};

export type UpdateMyAvatarPhotoACType = ReturnType<
  typeof updateMyAvatarPhotoAC
>;
export type AddPostACType = ReturnType<typeof addPostAC>;
export type SetServerProfileACType = ReturnType<typeof setServerProfileAC>;
export type GetProfileStatusACType = ReturnType<typeof getProfileStatusAC>;
export type UpdateProfileStatusACType = ReturnType<
  typeof updateProfileStatusAC
>;
export type DeletePostACType = ReturnType<typeof deletePostAC>;
export type SaveProfileDataACType = ReturnType<typeof saveProfileDataAC>
export type ChangeEditModeACType = ReturnType<typeof changeEditModeAC>
export type ActionTypeProfile =
  | AddPostACType
  | SetServerProfileACType
  | GetProfileStatusACType
  | UpdateProfileStatusACType
  | DeletePostACType
  | UpdateMyAvatarPhotoACType
  | SaveProfileDataACType
  | ChangeEditModeACType
