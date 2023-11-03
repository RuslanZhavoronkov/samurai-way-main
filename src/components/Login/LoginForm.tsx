import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input, createField } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import s from "../common/FormsControls/FormControls.module.css";

export type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

//const maxLength5 = maxLengthCreator(5);
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({
  handleSubmit,
  error,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* {createField("Email", "email", [required], Input)} */}
      {/* {createField("Password", "password", [required], Input, {type: "password"})} */}
      {/* {createField(null, "rememberMe", [], Input, {type: "checkbox"},'rememberMe')} */}
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          validate={[required]}
          component={Input}
          type={"password"}
        />
      </div>
      <div>
        <Field
          name={"rememberMe"}
          validate={[required]}
          component={Input}
          type={"checkbox"}
        />{" "}
        remember me
      </div>

      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export const LoginReduxForm = reduxForm<FormDataType>({
  form: "login",
})(LoginForm);
