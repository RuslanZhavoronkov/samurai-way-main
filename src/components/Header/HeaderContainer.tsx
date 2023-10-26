import React from "react";
import { Header } from "./Header";
import { AppDispatchType, AppRootStateType } from "../../redux/redux-store";
import { loginOutTC} from "../../redux/authReducer";
import { connect } from "react-redux";
import { Preloader } from "../common/Preloader/Preloader";

type PropsHeaderAPIComponentType = mapStateToPropsType & mapDispatchToPropsType;

export class HeaderAPIComponent extends React.Component<PropsHeaderAPIComponentType> {
  constructor(props: PropsHeaderAPIComponentType) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Header
          isAuth={this.props.isAuth}
          login={this.props.login}
          logOut={this.props.logOut}
        />
      </>
    );
  }
}

//HeaderContainer has a connection store
type mapStateToPropsType = {
  login: string | null;
  isFetching: boolean;
  isAuth: boolean;
};

type mapDispatchToPropsType = {
  logOut: () => void;
};

const mapStateToProps = (state: AppRootStateType) => {
  return {
    login: state.auth.AuthInfoForRedux.data.login,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch: AppDispatchType) => {
  return {
    logOut: () => {
      dispatch(loginOutTC());
    },
  };
};

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderAPIComponent);
