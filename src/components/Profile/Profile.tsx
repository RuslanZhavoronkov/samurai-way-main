import React from "react";
import { MyPosts} from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { PostType, ProfilePageType } from "../../redux/state";


export type PropsProfileType = {
  state: ProfilePageType
  addPost: (postMessage: string) => void
}


export const Profile: React.FC<PropsProfileType> = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts = {props.state.posts} addPost= {props.addPost}/>

    </div>
  );
};



