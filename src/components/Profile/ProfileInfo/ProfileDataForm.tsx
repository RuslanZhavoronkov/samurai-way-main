import { ProfileServerType } from "../../../redux/profileReducer";
import { ContactsSocialNetwork } from "./ContactsSocialNetwork";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Input, createField } from "../../common/FormsControls/FormsControls";
import s from "./ProfileInfo.module.css";

type ProfileDataFormPropsType = {
    profileFromServer: ProfileServerType
    activateEditMode:()=> void
    isOwner: boolean
}


export type ProfileDataFormType = {

}

export const ProfileDataForm:
 React.FC<InjectedFormProps<ProfileDataFormType> > =
 () => {
    const saveFormDataHandler = () => {
        
    } 
    return (
        <form onSubmit={()=> {}}>
        <div> <button onClick={saveFormDataHandler}>save</button></div> 
        <div>
          <b>Full name</b>: <Field
          placeholder={"Full name"}
          name={"fullName"}
          validate={[]}
          component={Input}
        />
        </div>
        <div>
          <b>Looking for a job</b>:{" "}
          {/* {profileFromServer.lookingForAJob ? "yes" : "no"}{" "} */}
        </div>
        {/* {profileFromServer.lookingForAJob && ( */}
          <div>
            <b>My professional skills</b>:{" "}
            {/* {profileFromServer.lookingForAJobDescription} */}
          </div>
        {/* )} */}
        <div>
          <b>About me</b>:{" "}
          {/* {profileFromServer.aboutMe ? profileFromServer.aboutMe : ""} */}
        </div>
        <div>
          <b>Contacts</b>:{" "}
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
    form: "login",
  })(ProfileDataForm);
  