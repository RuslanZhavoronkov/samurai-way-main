import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StateType, addPost } from './redux/state';
import App from './App';



export const renderTree = (state: StateType) => {
    ReactDOM.render(
      <BrowserRouter>
      <App  state={state} addPost = {addPost}/>
      </BrowserRouter>,
    document.getElementById('root')
    );
  }