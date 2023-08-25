import { FriendType, sideBarType } from "../../redux/store"
import { FriendsAvatar } from "./FriendsAvatar/FriendsAvatar"

type PropsFriendsType = {
    names: FriendType[]
}


export const Friends: React.FC<PropsFriendsType> = (props) => {
    return (
        <>
            <div>
                Friends
            </div>
            {props.names.map(el  => <FriendsAvatar  name = {el.name}/>)}
           
        </>

    )
}