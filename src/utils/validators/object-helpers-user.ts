import { UsersServerType } from "../../redux/usersReducer"

//for userReducer(update follow/unfollow)
export const updateObjectInArray = (
    users:UsersServerType,
    actionUserId: number,
    followed: boolean
    ) => {
  return  {
        ...users,
        items: users.items.map((el) =>
          el.id === actionUserId ? { ...el, followed: followed } : el
        ),
      }
}

//const users = state.users
//const actionUserId = action.payload.userId