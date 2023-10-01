import React from "react";
import { connect } from "react-redux";
import { AppDispatchType, AppRootStateType } from "../../redux/redux-store";
import { ProfileServerType, getUserProfileTC } from "../../redux/profileReducer";
import { Profile } from "./Profile";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router-dom";




// type ProfileAPIComponentPropsType = {
//     profileFromServer: ProfileServerType
//     setServerProfile: (serverProfile: ProfileServerType) => void
// }


type PathParamsType = {
    userId: string | undefined
}

type MapStatePropsType = {
    profileFromServer: ProfileServerType
}

type MapDispatchPropsType = {
    // setServerProfile: (serverProfile: ProfileServerType) => void
    getUserProfile: (userId: string) => void
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

        // profileAPI.getUserProfile(userId)
        //     .then((data) => {
        //         this.props.setServerProfile(data)
        //     })
    }
    render() {
        return (
            <Profile profileFromServer={this.props.profileFromServer} />
        );
    }
}



const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        profileFromServer: state.profilePage.profileFromServer
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchPropsType => {
    return {
        // setServerProfile: (serverProfile: ProfileServerType) => {
        //     dispatch(setServerProfileAC(serverProfile))
        // },
        getUserProfile: (userId: string) => {
            dispatch(getUserProfileTC(userId))
        }
    }
}

const WithUrlDataConteinerComponent = withRouter(ProfileAPIComponent)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataConteinerComponent)






