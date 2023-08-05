import React, { useState } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { PostType } from "../../../redux/state";


type PropsMyPostsType = {
  posts: PostType[]
}

export const MyPosts: React.FC <PropsMyPostsType> = (props) => {


  let postsElements = props.posts.map(el => <Post id={el.id} message={el.message} likesCount={el.likesCount} />)
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};
