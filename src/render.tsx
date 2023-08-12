import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StateType, addPost, changeNewPostText } from './redux/state';
import App from './App';



export const renderTree = (state: StateType) => {
    ReactDOM.render(
      <BrowserRouter>
      <App  state={state} addPost = {addPost} changeNewPostText = {changeNewPostText}/>
      </BrowserRouter>,
    document.getElementById('root')
    );
  }