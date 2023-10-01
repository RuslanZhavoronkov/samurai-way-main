import React from "react";
import { Header } from "./Header";
import { AppDispatchType, AppRootStateType } from "../../redux/redux-store";
import { processAuthorizationTC } from "../../redux/authReducer";
import { connect } from "react-redux";
import { Preloader } from "../common/Preloader/Preloader";



type PropsHeaderAPIComponentType = mapStateToPropsType & mapDispatchToPropsType


export class HeaderAPIComponent extends React.Component<PropsHeaderAPIComponentType> {

    constructor(props: PropsHeaderAPIComponentType) {
        super(props)
    }

    componentDidMount(): void {
        this.props.processAuthorization()
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
    // setUserData: (userData: AuthDataResponseServerType) => void
    // changeIsFetching: (status: boolean) => void
    processAuthorization:()=> void
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        login: state.auth.AuthInfoForRedux.data.login,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch:AppDispatchType) => {
    return {
        // setUserData: (userData: AuthDataResponseServerType) => {
        //     dispatch(setUserDataAC(userData))
        // },
        // changeIsFetching: (status: boolean) => {
        //     dispatch(changeIsFetchingAC(status))
        // },
        processAuthorization:()=>{
            dispatch(processAuthorizationTC())
        }

    }
}


export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIComponent)




//_______________________________________________________________________________
//     //Для того чтобы cookie подтянулись к запросу
    //     const config = {
    //         withCredentials: true,
    //         headers: {
    //             'API-KEY': '559562a7-157b-436b-9ddd-885f8624a836'
    //         }
    //     }
    //     this.props.changeIsFetching(true)
    //    headerAPI.processAuthorization()
    //         .then((data) => {
    //             this.props.changeIsFetching(false)
    //             if (data.resultCode === 0) {
    //                 this.props.setUserData(data.data)
    //             }
    //         })