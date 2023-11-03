import Field, { WrappedFieldProps } from "redux-form/lib/Field";
import s from "./FormControls.module.css";

const FormControl: React.FC<WrappedFieldProps> = ({
  input,
  meta: {touched, error},
  children,
  ...props
}) => {
  const hasError = touched && error;
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
      <div>
        {/* <textarea {...input} {...props} /> */}
        {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  return (
    <FormControl {...props}>
      {" "}
      <textarea {...props.input} {...props} />{" "}
    </FormControl>
  );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  return (
    <FormControl {...props}>
      {" "}
      <input {...props.input} {...props} />{" "}
    </FormControl>
  );
};

export const createField = (
  placeholder: string | null,
  name: string,
  validate: ((value: string) => string | undefined)[],
  component: React.FC<WrappedFieldProps>,
  newParametr?: {type: string},
  text?: string
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        validate={validate}
        component={component}
        {...newParametr}
      /> {text}
    </div>
  );
};
