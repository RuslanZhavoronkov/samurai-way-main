import ReactDOM from 'react-dom';
import './index.css';
import { StateType, store} from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const renderTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
    <App  state={state} addPost = {store.addPost.bind(store)} changeNewPostText = {store.changeNewPostText.bind(store)}/>
    </BrowserRouter>,
  document.getElementById('root')
  );
}

renderTree(store.getState())

store.subscribe(renderTree);