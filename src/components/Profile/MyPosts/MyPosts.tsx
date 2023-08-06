import React, { useRef, useState } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { PostType } from "../../../redux/state";


type PropsMyPostsType = {
  posts: PostType[]
  addPost:(postMessage: string) => void
}

export const MyPosts: React.FC<PropsMyPostsType> = (props) => {

  let postsElements = props.posts.map(el => <Post id={el.id} message={el.message} likesCount={el.likesCount} />)

  const addPostButonHandler = () => {
    let text = newPostElement.current as HTMLTextAreaElement
    props.addPost(text.value)
  }

  const newPostElement = useRef<HTMLTextAreaElement>(null) //содержит ссылку на элемент textarea

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div><textarea ref={newPostElement}></textarea></div>
        <div><button onClick={addPostButonHandler}>Add post</button></div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};


