import React from "react";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png"
        alt="icon"
      />
    </header>
  );
};
