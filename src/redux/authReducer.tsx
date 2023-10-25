import { Dispatch } from "redux";
import { RequestPayloadLoginInType, authAPI } from "../api/api";
import { AppDispatchType } from "./redux-store";

const initialState = {
  AuthInfoForRedux: {
    data: {
      id: null,
      login: null,
      email: null,
    },
  },
  isFetching: false, //крутилка
  isAuth: true, //авторизован/неавторизован
};

export const authReducer = (
  state: AuthStateType = initialState,
  action: AuthActionType
): AuthStateType => {
  switch (action.type) {
    case "SET-USER_DATA": {
      return {
        ...state,
        AuthInfoForRedux: {
          ...state.AuthInfoForRedux,
          data: action.payload.userData,
        },
        isAuth: true,
      };
    }

    case "CHANGE-ISFETCHING": {
      return { ...state, isFetching: action.payload.status };
    }

    case "CLEAR-DATA-USER": {
      return {
        ...state,
        AuthInfoForRedux: {
          ...state.AuthInfoForRedux,
          data: {
            ...state.AuthInfoForRedux.data,
            email: null,
            id: null,
            login: null,
          },
        },
        isAuth: false,
      };
    }

    default: {
      return state;
    }
  }
};

//actionCreator

export const setUserDataAC = (userData: AuthDataResponseServerType) => {
  return {
    type: "SET-USER_DATA",
    payload: {
      userData,
    },
  } as const;
};

export const changeIsFetchingAC = (status: boolean) => {
  return {
    type: "CHANGE-ISFETCHING",
    payload: {
      status,
    },
  } as const;
};

export const clearDataUserAC = () => {
  return {
    type: "CLEAR-DATA-USER",
  } as const;
};

//thunk
export const processAuthorizationTC = () => (dispatch: Dispatch) => {
  //авторизован ли я
  dispatch(changeIsFetchingAC(true));
  authAPI.processAuthorization().then((data) => {
    dispatch(changeIsFetchingAC(false));
    if (data.resultCode === 0) {
      dispatch(setUserDataAC(data.data));
    }
  });
};

export const loginInTC =
  (requestPayloadLoginIn: RequestPayloadLoginInType) =>
  (dispatch: AppDispatchType) => {
    authAPI.loginIn(requestPayloadLoginIn).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(processAuthorizationTC()); //авторизован ли я
      }
    });
  };

export const loginOutTC = () => (dispatch: Dispatch) => {
  authAPI.loginOut().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(clearDataUserAC());
    }
  });
};

//type

export type AuthDataResponseServerType = {
  id: number | null;
  login: string | null;
  email: string | null;
};

export type ResponseAuthMeServer = {
  data: AuthDataResponseServerType;
  messages: [];
  fieldsErrors: string[];
  resultCode: number;
};

type AuthInfoForReduxType = {
  data: AuthDataResponseServerType;
};

type AuthStateType = {
  AuthInfoForRedux: AuthInfoForReduxType;
  isFetching: boolean;
  isAuth: boolean;
};

type SetUserDataACType = ReturnType<typeof setUserDataAC>;
type changeIsFetchingACType = ReturnType<typeof changeIsFetchingAC>;
type ClearDataUserACType = ReturnType<typeof clearDataUserAC>;
//type LoginInACType = ReturnType<typeof loginInAC>
export type AuthActionType =
  | SetUserDataACType
  | changeIsFetchingACType
  | ClearDataUserACType;
//| LoginInACType
