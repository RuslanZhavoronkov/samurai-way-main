import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className={"app-wrapper"}>
      {/*Которая обернет всю страничку*/}
      <header className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png"
          alt="icon"
        />
      </header>
      <nav className={"nav"}>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className={"content"}>
        <div>
          <img
            src="https://img.gazeta.ru/files3/295/12960295/nasa-pic905-895x505-1317.jpg"
            alt="Nasa"
          />
        </div>
        <div>ava + description</div>
        <div>
          My posts
          <div>New post</div>
        </div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default App;
