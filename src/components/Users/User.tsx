import React from "react";
import { UserType, followingInProgressType } from "../../redux/usersReducer";
import s from "./users.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user1.png";

type UserPropsType = {
  user: UserType;
  followingInProgress: followingInProgressType;
  followUser: (userId: number) => void;
  unFollowUser: (userId: number) => void;
};

export const User: React.FC<UserPropsType> = ({
  user,
  followingInProgress,
  followUser,
  unFollowUser,
  ...props
}) => {
  let changeFollow: string;
  let onClickHandler;
  !user.followed ? (changeFollow = "Follow") : (changeFollow = "Unfollow");

  onClickHandler = () => {
    if (!user.followed) {
      followUser(user.id);
    } else {
      unFollowUser(user.id);
    }
  };
  const disabledButton = followingInProgress.id.some((id) => id === user.id);

  const photoAvatar =
    user.photos.small !== null ? user.photos.small : userPhoto;
  return (
    <div>
      <span>
        {/*picture and button(follow/unfollow) */}
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img className={s.userPhoto} src={photoAvatar} />
          </NavLink>{" "}
        </div>
        <div>
          <button onClick={onClickHandler} disabled={disabledButton}>
            {changeFollow}
          </button>
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"el.location.country"}</div>
          <div>{"el.location.city"}</div>
        </span>
      </span>
    </div>
  );
};
