import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink className={({isActive}) => (isActive ? s.active : s.default)} to='/profile'>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        {" "}
        {/*Применены два класса*/}
        <NavLink className={({isActive}) => (isActive ? s.active : s.default)} to='/dialogs'>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={({isActive}) => (isActive ? s.active : s.default)} to='/news'>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={({isActive}) => (isActive ? s.active : s.default)} to='/music'>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={({isActive}) => (isActive ? s.active : s.default)} to='/settings'>Settings</NavLink>
      </div>
    </nav>
  );
};
