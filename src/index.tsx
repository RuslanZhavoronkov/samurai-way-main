import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppRootStateType, store } from './redux/redux-store';
import { Provider } from 'react-redux';




const renderTree = (state: AppRootStateType) => {
  ReactDOM.render(

    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>  
    
    </BrowserRouter>,//для того, чтобы связать метод с владельцем (store) применим метод bind(потому что без него, он вызывался от имени props(props.addPost))
  document.getElementById('root')
  );
}

renderTree(store.getState()) //запускаем функцию перерисовки дерева(getState() не бандим потому что вызываем от имени store)

store.subscribe(()=> { //1.Сначала импортировали  из state.tsx, затем вызвали и передали функцию перерисовки дерева
  let state = store.getState()
    renderTree(state)
}); 










//____________________________________________________________________________________________________________________________________________________________
// const renderTree = (state: StateType) => {
//   ReactDOM.render(
//     <BrowserRouter>
//       <App state={state} dispatch={store.dispatch.bind(store)} />
//     </BrowserRouter>,//для того, чтобы связать метод с владельцем (store) применим метод bind(потому что без него, он вызывался от имени props(props.addPost))
//     document.getElementById('root')
//   );
// }

// renderTree(store.getState()) //запускаем функцию перерисовки дерева(getState() не бандим потому что вызываем от имени store)

// store.subscribe(renderTree); //1.Сначала импортировали  из state.tsx, затем вызвали и передали функцию перерисовки дерева


//with Provider from Redux___________________________________________________________________________________________________________________________


// const renderTree = (state: AppRootStateType) => {
//   ReactDOM.render(

//     <BrowserRouter>
//     <Provider store={store}>
//     <App  state={state} dispatch = {store.dispatch.bind(store)} />
//     </Provider>  
    
//     </BrowserRouter>,//для того, чтобы связать метод с владельцем (store) применим метод bind(потому что без него, он вызывался от имени props(props.addPost))
//   document.getElementById('root')
//   );
// }

// renderTree(store.getState()) //запускаем функцию перерисовки дерева(getState() не бандим потому что вызываем от имени store)

// store.subscribe(()=> { //1.Сначала импортировали  из state.tsx, затем вызвали и передали функцию перерисовки дерева
//   let state = store.getState()
//     renderTree(state)
// }); 
