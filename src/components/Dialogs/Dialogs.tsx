import React, { ChangeEvent } from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { MessageItem } from "./MessageItem/MessageItem";
import { DialogsPageType } from "../../redux/dialogsReducer";
import { Redirect } from "react-router-dom";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";



type PropsDialogsType = {
  state: DialogsPageType;
  addMessage: (newMessageText: string) => void;
  // updateMessageText: (newMessageText: string) => void
  // isAuth: boolean
};


const maxLength50 = maxLengthCreator(50)

export const Dialogs: React.FC<PropsDialogsType> = (props) => {
  const dialogsElements = props.state.dialogs.map((el) => (
    <DialogItem id={el.id} name={el.name} key={el.id} />
  ));
  const messagesElements = props.state.messages.map((el) => (
    <MessageItem id={el.id} message={el.message} key={el.id} />
  ));

  const onSubmit = (formData: FormDataDialogMessageType) => {
    props.addMessage(formData.newMessageText);
  };

  return (
    // Две колонки значит две дивки
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.chat}>
        <AddMessageReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export type FormDataDialogMessageType = {
  newMessageText: string;
};

export const AddMessageForm: React.FC<
  InjectedFormProps<FormDataDialogMessageType>
> = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            validate={[required, maxLength50]}
            component={Textarea}
            name={"newMessageText"}
            placeholder={"Enter you message"}
          />
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export const AddMessageReduxForm = reduxForm<FormDataDialogMessageType>({
  form: "dialogAddMessageForm",
})(AddMessageForm);
