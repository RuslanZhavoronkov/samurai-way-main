import React, { useRef, useState } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { PostType } from "../../../redux/state";


type PropsMyPostsType = {
  posts: PostType[]
  addPost:(postMessage: string) => void
}

export const MyPosts: React.FC<PropsMyPostsType> = (props) => {

  let postsElements = props.posts.map(el => < div key={el.id}><Post id={el.id} message={el.message} likesCount={el.likesCount} /></div>)

  const addPostButonHandler = () => {
    //let text = newPostElement.current as HTMLTextAreaElement
    if (newPostElement.current) {
      props.addPost(newPostElement.current.value)
      props.addPost(newPostElement.current.value = "")
    }
  }

 //const newPostElement = useRef<HTMLTextAreaElement>(null) //содержит ссылку на элемент textarea
 const newPostElement = React.createRef<HTMLTextAreaElement>()
 

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


