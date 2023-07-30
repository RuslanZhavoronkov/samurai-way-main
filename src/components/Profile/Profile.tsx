import React from "react";
import { MyPosts} from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { PropsPostType } from "../..";

export type PropsProfileComponentsType = {
  posts: PropsPostType[]
}


export const Profile: React.FC<PropsProfileComponentsType> = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts = {props.posts}/>

    </div>
  );
};



