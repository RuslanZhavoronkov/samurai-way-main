
import { connect } from "react-redux";
import { AppRootStateType} from "../../redux/redux-store";
import { Navbar } from "./Navbar";



const mapStateToProps = (state:AppRootStateType)=> {
  return {
    state: state.sideBar
  }
}





export const NavbarContainer = connect(mapStateToProps)(Navbar)


//____________________________________________________________________________________________

// export const NavbarContainer = () => {
   
//   const state = store.getState()

//   return (
//     <Navbar state={state.sideBar}/>
//   );
// };