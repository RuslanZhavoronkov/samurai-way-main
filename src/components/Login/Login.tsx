import { connect } from "react-redux";
import { FormDataType, LoginForm, LoginReduxForm } from "./LoginForm";
import { AppDispatchType, AppRootStateType } from "../../redux/redux-store";
import { RequestPayloadLoginInType } from "../../api/api";
import { loginInTC } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";



export const Login: React.FC<MapDispatchPropsType & MapStatePropsType> = (props) => {
  const onSubmit = (formData: FormDataType) => {
    //debugger
    props.loginIn(formData);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

type MapDispatchPropsType = {
  loginIn: (requestPayloadLoginIn: RequestPayloadLoginInType) => void;
};

type MapStatePropsType = {
  isAuth: boolean;
};

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth
  };
};

const mapDispatchToProps = (
  dispatch: AppDispatchType
): MapDispatchPropsType => {
  return {
    loginIn: (requestPayloadLoginIn: RequestPayloadLoginInType) => {
      debugger;
      dispatch(loginInTC(requestPayloadLoginIn));
      debugger;
    },
  };
};

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login); // connect это функция, которая возвращает HOC
