import s from "./FriendsAvatar.module.css";


type PropsFriendsAvatarType = {
    name: string
}


export const FriendsAvatar: React.FC<PropsFriendsAvatarType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://avavatar.ru/images/full/30/pYJBXtXlNkcCZLDa.jpg"
                alt=" venom "
            />
            <div className={s.name}>
                {props.name}
            </div>

        </div>
    )
}