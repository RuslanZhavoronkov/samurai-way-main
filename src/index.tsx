import ReactDOM from 'react-dom';
import './index.css';
import { SamurayJSApp } from './App';


  ReactDOM.render(
    <SamurayJSApp/>,//для того, чтобы связать метод с владельцем (store) применим метод bind(потому что без него, он вызывался от имени props(props.addPost))
  document.getElementById('root')
  );


//_______________________________________________________________________________________________________________________

// ReactDOM.render(
//   <BrowserRouter>
//   <Provider store={store}>
//   <App />
//   </Provider>  
//   </BrowserRouter>,//для того, чтобы связать метод с владельцем (store) применим метод bind(потому что без него, он вызывался от имени props(props.addPost))
// document.getElementById('root')
// );





