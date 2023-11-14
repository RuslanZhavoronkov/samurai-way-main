import React, { Suspense } from "react";
import "./App.css";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { NavbarContainer } from "./components/Navbar/NavbarContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { LoginContainer } from "./components/Login/Login";
import { Provider, connect } from "react-redux";
import { AppDispatchType, AppRootStateType, store } from "./redux/redux-store";
import { compose } from "redux";
import { initializeAppTC } from "./redux/appReduser";
import { Preloader } from "./components/common/Preloader/Preloader";
import { withSuspense } from "./hocs/withSuspense";

//import ProfileContainer  from "./components/Profile/ProfileContainer";
//import { DialogsContainer } from "./components/Dialogs/DialogsContainer";

//const DialogsContainer = React.lazy(async() =>(import('./components/Dialogs/DialogsContainer')) );
//const DialogsContainer = React.lazy(async () => ({ default: (await import("./components/Dialogs/DialogsContainer")).DialogsContainer}))

const ProfileContainer = React.lazy(
  () => import("./components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(
  () => import("./components/Dialogs/DialogsContainer")
);

class App extends React.Component<AppPropsType> {
  catchAllUnhandledErrors = (PromiseRejectionEvent:PromiseRejectionEvent) => {
    alert("Some error occured");
  };

  constructor(props: AppPropsType) {
    super(props);
  }
  componentDidMount(): void {
    this.props.initializeApp(); //(getAuthUserData)
    window.addEventListener(
      "unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount(): void {
    window.removeEventListener(
      "unhandledrejection", this.catchAllUnhandledErrors)
  }
  render() {
    if (!this.props.isInitialized) {
      return <Preloader />;
    }
    return (
      <div className={"app-wrapper"}>
        {/*Которая обернет страничку*/}
        <HeaderContainer />
        <NavbarContainer />
        <div className={"app-wrapper-content"}>
          <Switch>
            <Route
              exact
              path={"/"}
              render={() => <Redirect to={"/profile"} />}
            />
            <Route
              path={"/profile/:userId?"}
              render={withSuspense(ProfileContainer)}
            />
            <Route path={"/dialogs/"} render={withSuspense(DialogsContainer)} />
            <Route path={"/users"} component={UsersContainer} />
            <Route path={"/news"} component={News} />
            <Route path={"/music"} component={Music} />
            <Route path={"/settings"} component={Settings} />
            <Route path={"/login"} component={LoginContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppRootStateType) => {
  return {
    isInitialized: state.app.isInitialized,
  };
};

const mapDispatchToProps = (dispatch: AppDispatchType) => {
  return {
    initializeApp: () => {
      dispatch(initializeAppTC());
    },
  };
};

//type
type MapDispatchToPropsType = {
  initializeApp: () => void;
};

type MapStateToPropsType = {
  isInitialized: boolean;
};

type AppPropsType = MapDispatchToPropsType & MapStateToPropsType;

const AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);

export const SamurayJSApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
