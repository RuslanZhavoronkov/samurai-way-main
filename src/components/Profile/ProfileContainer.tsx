import React from "react";
import { connect } from "react-redux";
import { AppDispatchType, AppRootStateType } from "../../redux/redux-store";
import { ProfileServerType, changeEditModeAC, getProfileStatusTC, getUserProfileTC, saveProfileDataTC, updateMyAvatarPhotoTC, updateProfileStatusTC } from "../../redux/profileReducer";
import { Profile } from "./Profile";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hocs/withAuthRedirect";
import { ProfileDataFormType } from "./ProfileInfo/ProfileDataForm";



type PathParamsType = {
    userId: string | undefined
}

type MapStatePropsType = {
    profileFromServer: ProfileServerType,
    userStatus: string
    autorizedUserId: number | null
    isAuth: boolean
    isEditMode: boolean
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string | undefined) => void
    getProfileStatus: (userId: string | undefined) => void
    updateProfileStatus:(status: string) => void
    updateMyAvatarPhoto: (image: File) => void
    saveProfileData: (formData: ProfileDataFormType) => void
    changeEditMode: (isEditMode: boolean) => void
}

type ProfileAPIComponentPropsType = MapStatePropsType
& MapDispatchPropsType
& RouteComponentProps<PathParamsType>

export class ProfileAPIComponent extends React.Component<ProfileAPIComponentPropsType> {
    constructor(props: ProfileAPIComponentPropsType) {
        super(props)
    }

    //Метод обновления аватарки
    updateAvatar(){
        let userId = this.props.match.params.userId

        if (!userId) {
           userId = `${this.props.autorizedUserId}`
        }

        this.props.getUserProfile(userId)
        this.props.getProfileStatus(userId)
    }

    componentDidMount(): void {
        //debugger
     //Нажали в users еа аватарку -> redirect на profile -> получили userId -> загрузили для данного юзера информацию 
       this.updateAvatar()
    }
     componentDidUpdate(prevProps: Readonly<ProfileAPIComponentPropsType>, prevState: Readonly<{}>, snapshot?: any): void {
     //  debugger
        if (this.props.match.params.userId !== prevProps.match.params.userId){
             this.updateAvatar()
        }
    }
    render() {
        
        return (
            <Profile 
            updateMyAvatarPhoto = {this.props.updateMyAvatarPhoto}
            isOwner = {!this.props.match.params.userId}
            profileFromServer={this.props.profileFromServer}
            userStatus={this.props.userStatus}
            updateProfileStatus = { this.props.updateProfileStatus}
            saveProfileData = {this.props.saveProfileData}
            isEditMode = {this.props.isEditMode}
            changeEditMode = {this.props.changeEditMode}
            />
            
        );
    }
}


const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        profileFromServer: state.profilePage.profileFromServer,
        userStatus: state.profilePage.status,
        autorizedUserId: state.auth.AuthInfoForRedux.data.id,
        isAuth: state.auth.isAuth,
        isEditMode: state.profilePage.isEditMode
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchPropsType => {
    return {
        getUserProfile: (userId: string | undefined) => {
            dispatch(getUserProfileTC(userId))
        },
        getProfileStatus: (userId: string | undefined) => {
            dispatch(getProfileStatusTC(userId))
        },
        updateProfileStatus:(status: string) => {
            dispatch(updateProfileStatusTC(status))
        },
        updateMyAvatarPhoto: (image: File) => {
            dispatch(updateMyAvatarPhotoTC(image))
        },
        saveProfileData:(formData: ProfileDataFormType) => {
            dispatch(saveProfileDataTC(formData))
        },
        changeEditMode: (isEditMode: boolean) => {
            dispatch(changeEditModeAC(isEditMode))
        }
    }
}

 const ProfileContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileAPIComponent)
export default ProfileContainer





//____________________________________________________________________________________________________________
// componentDidMount(): void {
//     //Нажали в users еа аватарку -> redirect на profile -> получили userId -> загрузили для данного юзера информацию 
//        let userId = this.props.match.params.userId

//        if (!userId) {
//           userId = `${this.props.autorizedUserId}`
//        }

//        this.props.getUserProfile(userId)
//        this.props.getProfileStatus(userId)
//    }
//    componentDidUpdate(prevProps: Readonly<ProfileAPIComponentPropsType>, prevState: Readonly<{}>, snapshot?: any): void {
//        let userId = this.props.match.params.userId

//        if (!userId) {
//           userId = `${this.props.autorizedUserId}`
//        }

//        this.props.getUserProfile(userId)
//        this.props.getProfileStatus(userId)
//    }