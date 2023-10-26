import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";



type HeaderPropsType = {
  isAuth: boolean
  login: string | null
  logOut: () => void
}



export const Header: React.FC <HeaderPropsType> = (props) => {
  const logOutHandler = ()=> {
    props.logOut()
  }
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png"
        alt="icon"
      />
      <div className={s.loginBlock}>
        {props.isAuth ? 
        <div>{props.login} 
        <button onClick = {logOutHandler}>Log out</button></div>
         :
         <NavLink to={'/login'}> Login </NavLink>}
      </div>
    </header>
  );
};
