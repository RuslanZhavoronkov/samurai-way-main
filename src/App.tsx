import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { ActionTypeNew, StateType } from "./redux/state";






export type PropsAppType = {
  state: StateType
  dispatch: (action: ActionTypeNew) => void
}



const App: React.FC<PropsAppType> = (props) => {
  return (
    
      <div className={"app-wrapper"}>
        {/*Которая обернет страничку*/}
        <Header />
        <Navbar state = {props.state.sideBar}/>
        <div className={"app-wrapper-content"}>
          <Routes>
            <Route path={'/dialogs/*'} element={<Dialogs state = {props.state.dialogsPage}  dispatch = {props.dispatch}/>} />
            <Route path={'/profile'} element={<Profile state = {props.state.profilePage}   dispatch = {props.dispatch}/>} />
            <Route path={'/news'} element={<News />} />
            <Route path={'/music'} element={<Music />} />
            <Route path={'/settings'} element={<Settings />} />
          </Routes>
        </div>
      </div>
    
  )
};

export default App;



//______________________________________________________________________________________________________________________________________

// export type PropsAppType = {
//   state: StateType
//   addPost: () => void
//   changeNewPostText:(newPostText: string) => void
// }


// const App: React.FC<PropsAppType> = (props) => {
//   return (
    
//       <div className={"app-wrapper"}>
//         {/*Которая обернет страничку*/}
//         <Header />
//         <Navbar state = {props.state.sideBar}/>
//         <div className={"app-wrapper-content"}>
//           <Routes>
//             <Route path={'/dialogs/*'} element={<Dialogs state = {props.state.dialogsPage} />} />
//             <Route path={'/profile'} element={<Profile state = {props.state.profilePage}  addPost={props.addPost}  changeNewPostText={props.changeNewPostText}/>} />
//             <Route path={'/news'} element={<News />} />
//             <Route path={'/music'} element={<Music />} />
//             <Route path={'/settings'} element={<Settings />} />
//           </Routes>
//         </div>
//       </div>
    
//   )
// };

// export default App;