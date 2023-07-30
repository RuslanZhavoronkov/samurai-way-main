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
import { PropsDialogType, PropsMessageItemType, PropsPostType } from ".";



export type PropsAppType = {
  dialogs: PropsDialogType[],
  messages: PropsMessageItemType[]
  posts: PropsPostType[]
}



const App: React.FC<PropsAppType> = (props) => {
  return (
    <BrowserRouter>
      <div className={"app-wrapper"}>
        {/*Которая обернет страничку*/}
        <Header />
        <Navbar />
        <div className={"app-wrapper-content"}>
          <Routes>
            <Route path={'/dialogs/*'} element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
            <Route path={'/profile'} element={<Profile posts = {props.posts}/>} />
            <Route path={'/news'} element={<News />} />
            <Route path={'/music'} element={<Music />} />
            <Route path={'/settings'} element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
