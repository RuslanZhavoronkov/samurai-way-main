import React from "react";
import { connect } from "react-redux";
import { AppDispatchType, AppRootStateType } from "../../redux/redux-store";
import { ProfileServerType, getProfileStatusTC, getUserProfileTC, updateProfileStatusTC } from "../../redux/profileReducer";
import { Profile } from "./Profile";
import { Redirect, RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hocs/withAuthRedirect";
import { compose } from "redux";




// type ProfileAPIComponentPropsType = {
//     profileFromServer: ProfileServerType
//     setServerProfile: (serverProfile: ProfileServerType) => void
// }


type PathParamsType = {
    userId: string | undefined
}

type MapStatePropsType = {
    profileFromServer: ProfileServerType,
    userStatus: string
   // isAuth: boolean
}

type MapDispatchPropsType = {
    // setServerProfile: (serverProfile: ProfileServerType) => void
    getUserProfile: (userId: string) => void
    getProfileStatus: (userId: string) => void
    updateProfileStatus:(status: string) => void
}

type ProfileAPIComponentPropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>


export class ProfileAPIComponent extends React.Component<ProfileAPIComponentPropsType> {
    constructor(props: ProfileAPIComponentPropsType) {
        super(props)
    }

    componentDidMount(): void {
        //let userId = this.props.match.params.userId
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = '2'
        }

        this.props.getUserProfile(userId)
        this.props.getProfileStatus(userId)

    }
    render() {
        
        return (
            <Profile 
            profileFromServer={this.props.profileFromServer}
            userStatus={this.props.userStatus}
            updateProfileStatus = { this.props.updateProfileStatus}/>
        );
    }
}



const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        profileFromServer: state.profilePage.profileFromServer,
        userStatus: state.profilePage.status
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchPropsType => {
    return {
        getUserProfile: (userId: string) => {
            dispatch(getUserProfileTC(userId))
        },
        getProfileStatus: (userId: string) => {
            dispatch(getProfileStatusTC(userId))
        },
        updateProfileStatus:(status: string) => {
            dispatch(updateProfileStatusTC(status))
        }
    }
}

export const ProfileContainer = compose<React.ComponentType>(
    // withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileAPIComponent)

// const WithUrlDataConteinerComponent = withRouter(ProfileAPIComponent)
// export const ProfileConnectedContainerComponent = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataConteinerComponent)
// export const ProfileContainer = withAuthRedirect(ProfileConnectedContainerComponent)






