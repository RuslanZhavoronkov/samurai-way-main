import { Dispatch } from "redux";
import { AppActionsType } from "../redux/redux-store";
import { followingInProgressChangeAC } from "../redux/usersReducer";


export const followUnfollow = async (
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