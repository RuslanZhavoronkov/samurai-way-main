import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { AppRootStateType } from "../../redux/redux-store";
import { ActionTypeProfile, ProfileServerType, setServerProfileAC } from "../../redux/profileReducer";
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
    setServerProfile: (serverProfile: ProfileServerType) => void
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

        axios.get<ProfileServerType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                this.props.setServerProfile(response.data)
            })
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

const mapDispatchToProps = (dispatch: (action: ActionTypeProfile) => void): MapDispatchPropsType => {
    return {
        setServerProfile: (serverProfile: ProfileServerType) => {
            dispatch(setServerProfileAC(serverProfile))
        }
    }
}

const WithUrlDataConteinerComponent = withRouter(ProfileAPIComponent)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataConteinerComponent)






