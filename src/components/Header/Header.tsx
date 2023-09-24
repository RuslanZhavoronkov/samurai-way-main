import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { AuthDataResponseServerType } from "../../redux/authReducer";


type HeaderPropsType = {
  isAuth: boolean
  login: string | null
}



export const Header: React.FC <HeaderPropsType> = (props) => {
  const login  = props.isAuth ? props.login : 'Login' 
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png"
        alt="icon"
      />
      <div className={s.loginBlock}>
        <NavLink to={'/login'}> {login} </NavLink>
      </div>
    </header>
  );
};
