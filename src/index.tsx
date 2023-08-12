import ReactDOM from 'react-dom';
import './index.css';
import { StateType, addPost, changeNewPostText, state, subscribe } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const renderTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
    <App  state={state} addPost = {addPost} changeNewPostText = {changeNewPostText}/>
    </BrowserRouter>,
  document.getElementById('root')
  );
}

renderTree(state)

subscribe(renderTree);