import React from "react";
import {
  PaginationType,
  UsersServerType,
  followingInProgressType,
} from "../../redux/usersReducer";
import { Paginator } from "./Paginator/Paginator";
import { User } from "./User";

type UsersPropsType = {
  users: UsersServerType;
  pagination: PaginationType;
  onPageChanged: (pageNumber: number) => void;
  followingInProgress: followingInProgressType;
  followUser: (userId: number) => void;
  unFollowUser: (userId: number) => void;
};

export const Users: React.FC<UsersPropsType> = ({
  users,
  pagination,
  onPageChanged,
  followingInProgress,
  followUser,
  unFollowUser,
  ...props
}) => {
  let pageArray = [];
  let pagesCount = Math.ceil(users.totalCount / pagination.pageSize);

  for (let i = 1; i <= pagesCount; i++) {
    pageArray.push(i);
  }
  return (
    <div>
      <Paginator
        users={users}
        pagination={pagination}
        onPageChanged={onPageChanged}
      />
      {users.items.map((el) => {
        return(
           <User
          key={el.id}
          user={el}
          followingInProgress={followingInProgress}
          followUser={followUser}
          unFollowUser={unFollowUser}
        />   
        )
        
      })}
      </div>
  )
    }
      
//___________________________________________________________________________________________
      
//         let changeFollow: string;
//         let onClickHandler;
//         !el.followed ? (changeFollow = "Follow") : (changeFollow = "Unfollow");

//         onClickHandler = () => {
//           if (!el.followed) {
//             props.followUser(el.id);
//           } else {
//             props.unFollowUser(el.id);
//           }
//         };
//         const disabledButton = props.followingInProgress.id.some(
//           (id) => id === el.id
//         );

//         const photoAvatar =
//           el.photos.small !== null ? el.photos.small : userPhoto;
//         return (
//           <div key={el.id}>
//             <span>
//               {/*picture and button(follow/unfollow) */}
//               <div>
//                 <NavLink to={`/profile/${el.id}`}>
//                   <img className={s.userPhoto} src={photoAvatar} />
//                 </NavLink>{" "}
//               </div>
//               <div>
//                 <button onClick={onClickHandler} disabled={disabledButton}>
//                   {changeFollow}
//                 </button>
//               </div>
//             </span>
//             <span>
//               <span>
//                 <div>{el.name}</div>
//                 <div>{el.status}</div>
//               </span>
//               <span>
//                 <div>{"el.location.country"}</div>
//                 <div>{"el.location.city"}</div>
//               </span>
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
