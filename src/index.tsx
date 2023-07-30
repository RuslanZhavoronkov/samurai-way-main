import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



export type PropsPostType = {
  id: string,
  message: string
  likesCount: string
}

export type PropsDialogType = {
  id: string
  name: string
}

export type PropsMessageItemType = {
  id: string
  message: string
}



const dialogs:PropsDialogType[] = [
  { id: '1', name: 'Dimych' },
  { id: '2', name: 'Andrew' },
  { id: '3', name: 'Sveta' },
  { id: '4', name: 'Sasha' },
  { id: '5', name: 'Victor' },
  { id: '6', name: 'Valera' },

] 
  

const messages: PropsMessageItemType[]= [
  { id: '1', message: 'Hi' },
  { id: '2', message: 'How is your it-kamasutra ?' },
  { id: '3', message: 'Yo' },
  { id: '4', message: 'Yo' },
  { id: '5', message: 'Yo' },
  { id: '6', message: 'Yo' },
]

const posts : PropsPostType[] = ([
  { id: '1', message: 'Hi, how are you ?', likesCount: '12 ' },
  { id: '2', message: 'It\s my first post', likesCount: ' 11' },
])



ReactDOM.render(
  <App  dialogs={dialogs} messages={messages} posts = {posts}/>,
document.getElementById('root')
);