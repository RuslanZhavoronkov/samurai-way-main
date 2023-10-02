
import { connect } from "react-redux";
import { ActionTypeDialogs,  addMessageAC, updateMessageAC } from "../../redux/dialogsReducer";
import { AppRootStateType} from "../../redux/redux-store";
import { Dialogs } from "./Dialogs";
import { withAuthRedirect } from "../../hocs/withAuthRedirect";




const mapStateToProps = (state:AppRootStateType) => { //Возвращает объект props with state
    return {
        state: state.dialogsPage,
       // isAuth:state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: (action: ActionTypeDialogs) => void) => {   //Возвращают объект props with dispatch
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateMessageText: (newMessageText: string) => {
            dispatch(updateMessageAC(newMessageText))
        }
        // clearMessageText: () => {
        //     dispatch(clearMessageAC())
        // }
    }
}


export const DialogsConnectedConteinerComponent = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export const DialogsContainer = withAuthRedirect(DialogsConnectedConteinerComponent)


//_________________________________________________________________________________________________________________________

// export const DialogsContainer = () => {

   
//     const state = store.getState()

//    let addMessage = () => {
//       store.dispatch(addMessageAC())
//    }


//    const updateMessageText = (newMessageText:string) => {
//          store.dispatch(updateMessageAC(newMessageText))
//    }

//    return (
//        // Две колонки значит две дивки
//        <Dialogs 
//        state={state.dialogsPage}
//        addMessage={addMessage} 
//        updateMessageText = {updateMessageText} 
//        />
//    )
// }