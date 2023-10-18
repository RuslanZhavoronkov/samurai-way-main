import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { PostType } from "../../../redux/profileReducer";
import { Field, InjectedFormProps, reduxForm } from "redux-form";



type PropsMyPostsType = {
  posts: PostType[]
  // newPostText: string
  // changeNewPostText: (valueText: string) => void
  addPost: (newPostText: string) => void
}

export const MyPosts: React.FC<PropsMyPostsType> = (props) => {

  let postsElements = props.posts.map(el =>
    < div key={el.id}>
      <Post
        id={el.id}
        message={el.message}
        likesCount={el.likesCount} />
    </div>)

  const onSubmit = (formData: FormDataPostType) => {
    props.addPost(formData.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostReduxForm onSubmit={onSubmit} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};



type FormDataPostType = {
  newPostText: string
}

//create Component for Form
export const AddNewPostForm: React.FC<InjectedFormProps<FormDataPostType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={'textarea'} name={'newPostText'} />
      <div><button>Add post</button></div>
    </form>
  )
}

export const AddNewPostReduxForm = reduxForm<FormDataPostType>({
  form: 'ProfileAddNewPostForm'
})(AddNewPostForm)





//_____________________________________________________________________________________________________________________


 // const addPostButonHandler = () => {
  //   props.addPost()
  // }

  // const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   props.changeNewPostText(e.currentTarget.value)
  // }
