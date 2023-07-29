import React, { useState } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";



type PostType = {
  id: string,
  message: string
  likesCount: string
}

export const MyPosts = () => {

  const [postsData, setPostsData] = useState<PostType[]>([
    { id: '1', message: 'Hi, how are you ?', likesCount: '12 '},
    { id: '2', message: 'It\s my first post', likesCount:' 11' },
  ])

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>
      <div className={s.posts}>
        <Post id={postsData[0].id} message={postsData[0].message} likesCount={postsData[0].likesCount} />
        <Post id={postsData[1].id} message={postsData[1].message} likesCount={postsData[0].likesCount} />
      </div>
    </div>
  );
};
