import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import state from "./redux/state";
/*import Footer from "./Footer";
import Header from "./Header";
import Technologies from "./Technologies";*/

const App = () => {
  let message = state.profilePage.posts[0].message;
  let message2 = state.profilePage.posts[1].message;
  return (
    <BrowserRouter>
      {/*<div>
        <Header />
        <Technologies />
        <Footer />
  </div>*/}
      <div>
        <Route
          path={"/hello"}
          render={() => <HelloMessage message={message} />}
        />
        <Route
          path={"/bye"}
          render={() => <ByeMessage message={message2} />}
        />
      </div>
    </BrowserRouter>
  );
};

type MessageType = {
  message: string;
};

function HelloMessage(props: MessageType) {
  return <h1>{props.message}</h1>;
}

const ByeMessage: React.FC<MessageType> = (props) => {
  return <h1>{props.message}</h1>;
};

export default App;
