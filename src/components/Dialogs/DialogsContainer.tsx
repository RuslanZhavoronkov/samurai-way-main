
import { connect } from "react-redux";
import { ActionTypeDialogs,  addMessageAC} from "../../redux/dialogsReducer";
import { AppRootStateType} from "../../redux/redux-store";
import { Dialogs } from "./Dialogs";
import { withAuthRedirect } from "../../hocs/withAuthRedirect";
import { compose } from "redux";




const mapStateToProps = (state:AppRootStateType) => { //Возвращает объект props with state
    return {
        state: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: (action: ActionTypeDialogs) => void) => {   //Возвращают объект props with dispatch
    return {
        addMessage: (newMessageText: string) => {
            dispatch(addMessageAC(newMessageText))
        }
        // updateMessageText: (newMessageText: string) => {
        //     dispatch(updateMessageAC(newMessageText))
        // }
      
    }
}


export const DialogsContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps,mapDispatchToProps)// connect это функция, которая возвращает HOC
)(Dialogs)

