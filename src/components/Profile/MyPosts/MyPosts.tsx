import React, { ChangeEvent, useRef, useState } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { ActionTypeNew, PostType} from "../../../redux/state";
import { addPostAC, updatePostAC } from "../../../redux/profileReducer";


type PropsMyPostsType = {
  posts: PostType[]
  newPostText: string
  dispatch: (action: ActionTypeNew) => void
}

export const MyPosts: React.FC<PropsMyPostsType> = (props) => {

  let postsElements = props.posts.map(el => < div key={el.id}><Post id={el.id} message={el.message} likesCount={el.likesCount} /></div>)

  const addPostButonHandler = () => {
      props.dispatch(addPostAC())
     
  }

const onChangeTextareaHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
props.dispatch(updatePostAC(e.currentTarget.value))
}

//  const newPostElement = useRef<HTMLTextAreaElement>(null) //содержит ссылку на элемент textarea
 const newPostElement = React.createRef<HTMLTextAreaElement>()
 

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div><textarea ref={newPostElement} value = {props.newPostText} onChange = {onChangeTextareaHandler} ></textarea></div> 
        {/* <div><textarea value = {""} onChange = {onChangeTextareaHandler}></textarea></div> */}
        <div><button onClick={addPostButonHandler}>Add post</button></div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};


//_____________________________________________________________________________________________________________________


// type PropsMyPostsType = {
//   posts: PostType[]
//   newPostText: string
//   dispatch: (action: ActionTypeNew) => void
//   // addPost:() => void
//   // changeNewPostText:(newPostText: string) => void
// }

// export const MyPosts: React.FC<PropsMyPostsType> = (props) => {

//   let postsElements = props.posts.map(el => < div key={el.id}><Post id={el.id} message={el.message} likesCount={el.likesCount} /></div>)

//   const addPostButonHandler = () => {
//     // let text = newPostElement.current as HTMLTextAreaElement
//       props.dispatch(addPostAC())
     
//   }

// const onChangeTextareaHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
// props.changeNewPostText(e.currentTarget.value)
// }

// //  const newPostElement = useRef<HTMLTextAreaElement>(null) //содержит ссылку на элемент textarea
//  const newPostElement = React.createRef<HTMLTextAreaElement>()
 

//   return (
//     <div className={s.postsBlock}>
//       <h3>My posts</h3>
//       <div>
//         <div><textarea ref={newPostElement} value = {props.newPostText} onChange = {onChangeTextareaHandler} ></textarea></div> 
//         {/* <div><textarea value = {""} onChange = {onChangeTextareaHandler}></textarea></div> */}
//         <div><button onClick={addPostButonHandler}>Add post</button></div>
//       </div>
//       <div className={s.posts}>
//         {postsElements}
//       </div>
//     </div>
//   );
// };