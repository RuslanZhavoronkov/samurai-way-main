import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { PostType } from "../../../redux/profileReducer";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";



type PropsMyPostsType = {
  posts: PostType[]
  addPost: (newPostText: string) => void
}

const maxLength10 = maxLengthCreator(10)

export const MyPosts:React.FC<PropsMyPostsType> =React.memo(
   (props) => {
 
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
}
)

  



type FormDataPostType = {
  newPostText: string
}

//create Component for Form
export const AddNewPostForm: React.FC<InjectedFormProps<FormDataPostType>> = React.memo((props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field 
      placeholder={'Post message'}
      component={Textarea} //заменили 'textarea' на кастомную "Textarea"
      name={'newPostText'} 
      validate = {[required, maxLength10]}
      />
      <div><button>Add post</button></div>
    </form>
  )
})

export const AddNewPostReduxForm = reduxForm<FormDataPostType>({
  form: 'ProfileAddNewPostForm'
})(AddNewPostForm)





//_____________________________________________________________________________________________________________________

