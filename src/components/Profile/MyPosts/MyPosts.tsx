import React, { useState } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";



type PostType = {
  id: string,
  message: string
  likesCount: string
}

export const MyPosts = () => {

  const [posts, setPostsData] = useState<PostType[]>([
    { id: '1', message: 'Hi, how are you ?', likesCount: '12 '},
    { id: '2', message: 'It\s my first post', likesCount:' 11' },
  ])
let postsElements = posts.map(el => <Post id={el.id} message={el.message} likesCount={el.likesCount} />)
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
