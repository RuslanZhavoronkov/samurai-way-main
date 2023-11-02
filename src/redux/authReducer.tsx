import { Dispatch } from "redux";
import { RequestPayloadLoginInType, authAPI } from "../api/api";
import { AppDispatchType } from "./redux-store";
import { stopSubmit } from "redux-form";

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
    case "samurai-network/auth/SET-USER_DATA": {
      return {
        ...state,
        AuthInfoForRedux: {
          ...state.AuthInfoForRedux,
          data: action.payload.userData,
        },
        isAuth: true,
      };
    }

    case "samurai-network/auth/CHANGE-ISFETCHING": {
      return { ...state, isFetching: action.payload.status };
    }

    case "samurai-network/auth/CLEAR-DATA-USER": {
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
    type: "samurai-network/auth/SET-USER_DATA",
    payload: {
      userData,
    },
  } as const;
};

export const changeIsFetchingAC = (status: boolean) => {
  return {
    type: "samurai-network/auth/CHANGE-ISFETCHING",
    payload: {
      status,
    },
  } as const;
};

export const clearDataUserAC = () => {
  return {
    type: "samurai-network/auth/CLEAR-DATA-USER",
  } as const;
};

//thunk
export const processAuthorizationTC = () => async (dispatch: Dispatch) => {
  dispatch(changeIsFetchingAC(true));//авторизован ли я
  try {
    const data = await authAPI.processAuthorization();
    dispatch(changeIsFetchingAC(false));
    if (data.resultCode === 0) {
      dispatch(setUserDataAC(data.data));
    }
  } catch (e) {
    alert(e);
  }
};

export const loginInTC =
  (requestPayloadLoginIn: RequestPayloadLoginInType) =>
  async (dispatch: AppDispatchType) => {
    try {
      const response = await authAPI.loginIn(requestPayloadLoginIn);
      if (response.data.resultCode === 0) {
        dispatch(processAuthorizationTC()); //авторизован ли я
      } else {
        let message =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error";
        dispatch(stopSubmit("login", { _error: message })); // actionCreator(форма которую стопаем,
      } //{проблемное поле, которое вызвало ошибку(в нашем примере передали объект с ошибками для каждого Филда)}) из ReduxForm
    } catch (e) {
      console.log(e);
    }
  };

export const loginOutTC = () => async (dispatch: Dispatch) => {
  try {
    const response = await authAPI.loginOut()
    if (response.data.resultCode === 0) {
      dispatch(clearDataUserAC());
    }
  }
  catch(e) {
    console.log(e)
  }
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

