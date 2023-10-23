import { WrappedFieldProps } from "redux-form/lib/Field";
import s from "./FormControls.module.css";


const FormControl: React.FC<WrappedFieldProps> = ({
    input,
    meta,
    children,
    ...props
  }) => {
    const hasError = meta.touched && meta.error
  return (
    <div className= {`${s.formControl} ${hasError ? s.error : ''}`}>
      <div>
       {/* <textarea {...input} {...props} /> */}
       {children}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
}


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  return (
   <FormControl {...props}> <textarea {...props.input} {...props} /> </FormControl>
  );
};



export const Input: React.FC<WrappedFieldProps> = (props) => {
    return (
     <FormControl {...props}> <input {...props.input} {...props} /> </FormControl>
    );
  };
  