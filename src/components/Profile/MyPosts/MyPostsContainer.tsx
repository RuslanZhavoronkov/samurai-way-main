import { ActionTypeNew, PostType} from "../../../redux/store";
import { addPostAC, updatePostAC } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { AppRootStateType, store } from "../../../redux/redux-store";




export const MyPostsConteiner = () => {

  let state = store.getState()

  const addPost = () => {
    store.dispatch(addPostAC())
  }

const changeNewPostText = (valueText:string) => {
  store.dispatch(updatePostAC(valueText))
}


  return (
    <MyPosts 
    changeNewPostText = {changeNewPostText} 
    addPost = {addPost}  posts = {state.profilePage.posts}
    newPostText = {state.profilePage.newPostText}/>
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

// not use store_____________________________________________________________________
// type PropsMyPostsType = {
//   posts: PostType[]
//   newPostText: string
//   dispatch: (action: ActionTypeNew) => void
// }

// export const MyPostsConteiner: React.FC<PropsMyPostsType> = (props) => {


//   const addPost = () => {
//     store.dispatch(addPostAC())
//       //props.dispatch(addPostAC())
//   }

// const changeNewPostText = (valueText:string) => {
//   store.dispatch(updatePostAC(valueText))
// //props.dispatch(updatePostAC(valueText))
// }


//   return (
//     <MyPosts changeNewPostText = {changeNewPostText} addPost = {addPost}  posts = {props.posts} newPostText = {props.newPostText}/>
//   );
// };