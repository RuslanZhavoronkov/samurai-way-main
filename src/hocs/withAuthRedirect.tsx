import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppRootStateType } from '../redux/redux-store'



type MapStatePropsType = { 
    isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}


//Create HOC
export function withAuthRedirect(Component: React.ComponentType) {
//Create container component
const RedirectComponent = (props:MapStatePropsType) => {

    let {isAuth, ...restProps} = props
     if (!isAuth) {return <Redirect to={'/login'} />}

    return <Component {...restProps}/>
}

let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

return ConnectedRedirectComponent
}