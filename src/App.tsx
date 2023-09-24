import React from "react";
import "./App.css";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { NavbarContainer } from "./components/Navbar/NavbarContainer";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import { ProfileContainer } from "./components/Profile/ProfileContainer";
import { Route } from "react-router-dom";
import { HeaderContainer } from "./components/Header/HeaderContainer";







// export type PropsAppType = {
//   state: StateType
//   dispatch: (action: ActionTypeNew) => void
// }



// const App: React.FC<PropsAppType> = (props) => {
  const App = () => {
  return (
    
      <div className={"app-wrapper"}>
        {/*Которая обернет страничку*/}
        <HeaderContainer />
        <NavbarContainer/>
        <div className={"app-wrapper-content"}>
            <Route path={'/profile/:userId?'} component={ProfileContainer} />
            <Route path={'/dialogs/'} component={DialogsContainer} />
            <Route path={'/users'} component={UsersContainer} />
            <Route path={'/news'} component={News} />
            <Route path={'/music'} component={Music} />
            <Route path={'/settings'} component={Settings} />
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