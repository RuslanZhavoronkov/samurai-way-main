import { ProfileServerType } from "../../../redux/profileReducer";
import { ContactsSocialNetwork } from "./ContactsSocialNetwork";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Input, Textarea, createField } from "../../common/FormsControls/FormsControls";
import s from "./ProfileInfo.module.css";
import { useAppSelector } from "../../../hocs/hocs";



export type ProfileDataFormType = {
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  aboutMe: string
}


export const ProfileDataForm:
 React.FC<InjectedFormProps<ProfileDataFormType>> =
 (props) => {
    const profileFromServer = useAppSelector(state => state.profilePage.profileFromServer)
    return (
        <form onSubmit={props.handleSubmit}>
        <div> <button>save</button></div> 
        <div>
          <b>Full name</b>: <Field
          placeholder={"Full name"}
          name={"fullName"}
          validate={[]}
          component={Input}
        />
        </div>
        <div>
          <b>Looking for a job</b>:<Field
          name={"lookingForAJob"}
          validate={[]}
          component={Input}
          type={"checkbox"}
        />
        </div>
          <div>
            <b>My professional skills</b>:<Field
          placeholder={"My proffessional skills"}
          name={"lookingForAJobDescription"}
          validate={[]}
          component={Textarea}
           />
          </div>
        <div>
          <b>About me</b>:<Field
          placeholder={"About me"}
          name={"aboutMe"}
          validate={[]}
          component={Textarea}
           />
        </div>
        <div>
          <b>Contacts</b>:{" "} 
           {Object.keys(profileFromServer.contacts).map((key) => { 
             return (
              <div className={s.contact}>
                <b>{key}:</b><Field
          placeholder={key}
          name={`contacts.${key}`}
          validate={[]}
          component={Input}
        />
              </div>
            );
          })}
        </div>
      </form>
    )
}


export const ProfileDataReduxForm = reduxForm<ProfileDataFormType>({
    form: "edit-profile",
  })(ProfileDataForm);
  