import React from "react";
import { Header } from "./Header";
import axios from "axios";
import { AppRootStateType } from "../../redux/redux-store";
import { AuthActionType, AuthDataResponseServerType, ResponseAuthMeServer, changeIsFetchingAC, setUserDataAC } from "../../redux/authReducer";
import { connect } from "react-redux";
import { Preloader } from "../common/Preloader/Preloader";


type PropsHeaderAPIComponentType = mapStateToPropsType & mapDispatchToPropsType


export class HeaderAPIComponent extends React.Component<PropsHeaderAPIComponentType> {

    constructor(props: PropsHeaderAPIComponentType) {
        super(props)
    }

    componentDidMount(): void {

        //Для того чтобы cookie подтянулись к запросу
        const config = {
            withCredentials: true,
            headers: {
                'API-KEY': '559562a7-157b-436b-9ddd-885f8624a836'
            }
        }
        this.props.changeIsFetching(true)
        axios.get<ResponseAuthMeServer>(`https://social-network.samuraijs.com/api/1.0/auth/me`, config)
            .then((response) => {
                this.props.changeIsFetching(false)
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data)
                }
            })
    }
    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Header isAuth = {this.props.isAuth} login = {this.props.login}/>
            </div>

        )
    }
}



//HeaderContainer has a connection store
type mapStateToPropsType = {
    login: string | null
    isFetching: boolean
    isAuth: boolean
}

type mapDispatchToPropsType = {
    setUserData: (userData: AuthDataResponseServerType) => void
    changeIsFetching: (status: boolean) => void
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        login: state.auth.AuthInfoForRedux.data.login,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: (action: AuthActionType) => void) => {
    return {
        setUserData: (userData: AuthDataResponseServerType) => {
            dispatch(setUserDataAC(userData))
        },

        changeIsFetching: (status: boolean) => {
            dispatch(changeIsFetchingAC(status))
        }

    }
}


export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIComponent)