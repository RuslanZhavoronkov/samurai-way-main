import React, { Suspense } from "react";
import "./App.css";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { NavbarContainer } from "./components/Navbar/NavbarContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { LoginContainer } from "./components/Login/Login";
import { Provider, connect } from "react-redux";
import { AppDispatchType, AppRootStateType, store } from "./redux/redux-store";
import { compose } from "redux";
import { initializeAppTC } from "./redux/appReduser";
import { Preloader } from "./components/common/Preloader/Preloader";


//import ProfileContainer  from "./components/Profile/ProfileContainer";
//import { DialogsContainer } from "./components/Dialogs/DialogsContainer";


//const DialogsContainer = React.lazy(async() =>(import('./components/Dialogs/DialogsContainer')) );
//const DialogsContainer = React.lazy(async () => ({ default: (await import("./components/Dialogs/DialogsContainer")).DialogsContainer}))





const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer")) 
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer")) 


class App extends React.Component<AppPropsType> {
  constructor(props: AppPropsType) {
    super(props);
  }
  componentDidMount(): void {
    this.props.initializeApp(); //(getAuthUserData)
  }
  render() {

if (!this.props.isInitialized) {
  return  <Preloader/>
}
    return (
      <div className={"app-wrapper"}>
        {/*Которая обернет страничку*/}
        <HeaderContainer />
        <NavbarContainer />
        <div className={"app-wrapper-content"}>
          <Route path={"/profile/:userId?"} render={()=> {
            return <Suspense fallback={<Preloader/>}>
            <ProfileContainer />
          </Suspense>
          }} />
          <Route path={"/dialogs/"} render={()=> {
            return <Suspense fallback={<Preloader/>}>
            <DialogsContainer />
          </Suspense>
          }} />
          <Route path={"/users"} component={UsersContainer} />
          <Route path={"/news"} component={News} />
          <Route path={"/music"} component={Music} />
          <Route path={"/settings"} component={Settings} />
          <Route path={"/login"} component={LoginContainer} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppRootStateType) => {
  return {
    isInitialized: state.app.isInitialized
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
  isInitialized:boolean
}

type AppPropsType = MapDispatchToPropsType & MapStateToPropsType;

const AppContainer =  compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);

export const SamurayJSApp = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <AppContainer/>
    </Provider>  
    </BrowserRouter>
  )
}


//_________________________________________________________________________________________________
// export default compose<React.ComponentType>(
//   withRouter,
//   connect(mapStateToProps, mapDispatchToProps)
// )(App);

