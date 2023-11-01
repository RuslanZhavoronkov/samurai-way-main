import { Dispatch } from "redux";
import { userAPI } from "../api/api";
import { AppActionsType, AppThunkType } from "./redux-store";

//initial state
const initialState: UsersPageType = {
  users: {
    items: [],
    totalCount: 5,
    error: null,
  },
  pagination: {
    pageSize: 5, //quantity users in page
    currentPage: 1, //change number page
  },
  isFetching: true, //крутилка
  followingInProgress: {
    id: [],
    disable: false,
  }, //disable кнопки во время запроса
};

//reducer
export const usersReducer = (
  state: UsersPageType = initialState,
  action: ActionTypeUser
): UsersPageType => {
  switch (action.type) {
    case "users/FOLLOW": {
      return {
        ...state,
        users: {
          ...state.users,
          items: state.users.items.map((el) =>
            el.id === action.payload.userId ? { ...el, followed: true } : el
          ),
        },
      };
    }
    case "users/UNFOLLOW": {
      return {
        ...state,
        users: {
          ...state.users,
          items: state.users.items.map((el) =>
            el.id === action.payload.userId ? { ...el, followed: false } : el
          ),
        },
      };
    }
    case "users/SET_USERS": {
      return {
        ...state,
        users: {
          ...state.users,
          items: action.payload.users.items,
          totalCount: action.payload.users.totalCount,
        },
      };
    }
    case "users/CHANGE_NUMBER_CURRENT_PAGE": {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.payload.numberPage,
        },
      };
    }
    case "users/IS-FETCHING-CHANGE": {
      return { ...state, isFetching: action.payload.status };
    }
    case "users/FOLLOWING-PROGRESS-CHANGE": {
      if (action.payload.disable) {
        return {
          ...state,
          followingInProgress: {
            ...state.followingInProgress,
            id: [...state.followingInProgress.id, action.payload.id],
          },
        };
      } else {
        return {
          ...state,
          followingInProgress: {
            ...state.followingInProgress,
            id: state.followingInProgress.id.filter(
              (el) => el !== action.payload.id
            ),
          },
        };
      }
    }
    default: {
      return state;
    }
  }
};

//Create ActionCreate
//follow - status:friend
export const followAC = (userId: number) => {
  return {
    type: "users/FOLLOW",
    payload: {
      userId,
    },
  } as const;
};

//unfollow - status: not friend
export const unfollowAC = (userId: number) => {
  return {
    type: "users/UNFOLLOW",
    payload: {
      userId,
    },
  } as const;
};

//Add users from server
export const setUsersAC = (users: UsersServerType) => {
  return {
    type: "users/SET_USERS",
    payload: {
      users,
    },
  } as const;
};

//Change current page
export const changeCurrentPageAC = (numberPage: number) => {
  return {
    type: "users/CHANGE_NUMBER_CURRENT_PAGE",
    payload: {
      numberPage,
    },
  } as const;
};

export const isFetchingChangeAC = (status: boolean) => {
  return {
    type: "users/IS-FETCHING-CHANGE",
    payload: {
      status,
    },
  } as const;
};

export const followingInProgressChangeAC = (id: number, disable: boolean) => {
  return {
    type: "users/FOLLOWING-PROGRESS-CHANGE",
    payload: {
      id,
      disable,
    },
  } as const;
};

//thunk
export const getUsersTC =
  (pageNumber: number, pageSize: number): AppThunkType =>
  async (dispatch: Dispatch<AppActionsType>) => {
    try {
      dispatch(isFetchingChangeAC(true));
      const data = await userAPI.getUsers(pageNumber, pageSize);
      dispatch(setUsersAC(data));
      dispatch(isFetchingChangeAC(false));
    } catch (e) {
      alert("Users-Reducer(getUsersTC) error");
    }
  };

const followUnfollow = async (
    dispatch:Dispatch<AppActionsType>,
    userId: number,
    apiMethod:(userId:number) => Promise<number>,
    actionCreator: (userId: number) => AppActionsType
    ) => {
    dispatch(followingInProgressChangeAC(userId, true));
    const resultCode = await apiMethod(userId);
    if (resultCode === 0) {
      //если сервер подтвердил, что подписка произошла
      dispatch(actionCreator(userId));
    }
    dispatch(followingInProgressChangeAC(userId, false));
}
 


export const followUserTC =
  (userId: number) => async (dispatch: Dispatch<AppActionsType>) => {
    try {
      let apiMethod = userAPI.followPost.bind(userAPI);
      let actionCreator = followAC;
      followUnfollow(dispatch,userId,apiMethod,actionCreator)
      
    //   dispatch(followingInProgressChangeAC(userId, true));
    //   const resultCode = await apiMethod(userId);
    //   if (resultCode === 0) {
    //     //если сервер подтвердил, что подписка произошла
    //     dispatch(actionCreator(userId));
    //   }
    //   dispatch(followingInProgressChangeAC(userId, false));
    } catch (e) {
      console.log("Users-Reducer(followUserTC) error");
    }
  };

export const unfollowUserTC =
  (userId: number) => async (dispatch: Dispatch<AppActionsType>) => {
    try {
      let apiMethod = userAPI.unfollowDelete.bind(userAPI);
      let actionCreator = unfollowAC
      followUnfollow(dispatch,userId,apiMethod,actionCreator)

    //   dispatch(followingInProgressChangeAC(userId, true));
    //   const resultCode = await apiMethod(userId);
    //   if (resultCode === 0) {
    //     dispatch(actionCreator(userId));
    //   }
    //   dispatch(followingInProgressChangeAC(userId, false));

    } catch (e) {
      console.log("Users-Reducer(followUserTC) error");
    }
  };

//type
export type ResponseTypeFollowUnfollow = {
  resultCode: number;
  messages: string[];
  data: {};
  fieldsErrors: string[];
};
type ChangeCurrentPageACType = ReturnType<typeof changeCurrentPageAC>;
type FollowACType = ReturnType<typeof followAC>;
type UnfollowACType = ReturnType<typeof unfollowAC>;
type SetUsersACType = ReturnType<typeof setUsersAC>;
type IsFetchingChangeACType = ReturnType<typeof isFetchingChangeAC>;
type followingInProgressChangeACType = ReturnType<
  typeof followingInProgressChangeAC
>;
export type ActionTypeUser =
  | FollowACType
  | UnfollowACType
  | SetUsersACType
  | ChangeCurrentPageACType
  | IsFetchingChangeACType
  | followingInProgressChangeACType;

export type PaginationType = {
  pageSize: number;
  currentPage: number;
};
export type PhotoType = {
  small: string | undefined;
  large: string | undefined;
};
export type UserType = {
  name: string;
  id: number;
  uniqueUrlName: null | string;
  photos: PhotoType;
  status: null | string;
  followed: boolean;
};
export type UsersServerType = {
  items: UserType[];
  totalCount: number;
  error: null | string;
};
export type followingInProgressType = {
  id: number[];
  disable: boolean;
};
export type UsersPageType = {
  users: UsersServerType;
  pagination: PaginationType;
  isFetching: boolean;
  followingInProgress: followingInProgressType; //disabled button
};

//case "users/FOLLOW": {
// return {
//     ...state,
//     users: {
//       ...state.users,
//       items: state.users.items.map((el) =>
//         el.id === action.payload.userId ? { ...el, followed: true } : el
//       ),
//     },
//   };
// }
// case "users/UNFOLLOW": {
//   return {
//     ...state,
//     users: {
//       ...state.users,
//       items: state.users.items.map((el) =>
//         el.id === action.payload.userId ? { ...el, followed: false } : el
//       ),
//     },
//   };
// }

//     export const followUserTC =
//   (userId: number) => async (dispatch: Dispatch<AppActionsType>) => {
//     try {
//       dispatch(followingInProgressChangeAC(userId, true));
//       const resultCode = await userAPI.followPost(userId);
//       if (resultCode === 0) {
//         //если сервер подтвердил, что подписка произошла
//         dispatch(followAC(userId));
//       }
//       dispatch(followingInProgressChangeAC(userId, false));
//     } catch (e) {
//         console.log("Users-Reducer(followUserTC) error")
//     }
//   };

// export const unfollowUserTC =
//   (userId: number) => async (dispatch: Dispatch<AppActionsType>) => {
//     try{
//     dispatch(followingInProgressChangeAC(userId, true));
//     const resultCode = await userAPI.unfollowDelete(userId)
//       if (resultCode === 0) {
//         dispatch(unfollowAC(userId));
//       }
//       dispatch(followingInProgressChangeAC(userId, false));
//     }
// catch(e){
//     console.log("Users-Reducer(followUserTC) error")
// }
//   };
