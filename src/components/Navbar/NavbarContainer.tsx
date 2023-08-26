
import { store } from "../../redux/redux-store";
import { Navbar } from "./Navbar";




export const NavbarContainer = () => {
   
  const state = store.getState()

  return (
    <Navbar state={state.sideBar}/>
  );
};
