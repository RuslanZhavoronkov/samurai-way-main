import ReactDOM from 'react-dom';
import './index.css';
import { StateType, store} from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const renderTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>  
    <App  state={state} addPost = {store.addPost.bind(store)} changeNewPostText = {store.changeNewPostText.bind(store)}/>
    </BrowserRouter>,//для того, чтобы связать метод с владельцем (store) применим метод bind(потому что без него, он вызывался от имени props(props.addPost))
  document.getElementById('root')
  );
}

renderTree(store.getState()) //запускаем функцию перерисовки дерева(getState() не бандим потому что вызываем от имени store)

store.subscribe(renderTree); //1.Сначала импортировали  из state.tsx, затем вызвали и передали функцию перерисовки дерева