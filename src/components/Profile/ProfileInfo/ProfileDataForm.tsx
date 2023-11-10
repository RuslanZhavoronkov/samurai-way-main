import { ProfileServerType } from "../../../redux/profileReducer";
import { ContactsSocialNetwork } from "./ContactsSocialNetwork";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Input, Textarea, createField } from "../../common/FormsControls/FormsControls";
import s from "./ProfileInfo.module.css";



export type ProfileDataFormType = {
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  aboutMe: string
}

export const ProfileDataForm:
 React.FC<InjectedFormProps<ProfileDataFormType> > =
 ({handleSubmit}) => {
    
    return (
        <form onSubmit={handleSubmit}>
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
          {/* <b>Contacts</b>:{" "} */}
          {/* {Object.keys(profileFromServer.contacts).map((key) => { */}
            {/* return (
              <ContactsSocialNetwork
                key={key}
                contactTitle={key}
                contactValue={profileFromServer.contacts[key]}
              />
            );
          })} */}
        </div>
      </form>
    )
}


export const ProfileDataReduxForm = reduxForm<ProfileDataFormType>({
    form: "edit-profile",
  })(ProfileDataForm);
  