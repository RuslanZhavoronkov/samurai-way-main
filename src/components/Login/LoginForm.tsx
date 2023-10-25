import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import s from "../common/FormsControls/FormControls.module.css";

export type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

//const maxLength5 = maxLengthCreator(5);

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          component={Input}
          name={"email"}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          component={Input}
          name={"password"}
          type={"password"}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          type={"checkbox"}
          component={Input}
          name={"rememberMe"}
          validate={[required]}
        />{" "}
        remember me
      </div>
      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export const LoginReduxForm = reduxForm<FormDataType>({
  form: "login",
})(LoginForm);
