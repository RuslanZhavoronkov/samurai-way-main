import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateType, addPost, state } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import { renderTree } from './render';






renderTree(state);