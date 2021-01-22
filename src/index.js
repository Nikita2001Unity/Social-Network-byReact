import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DialogItem from './components/Dialogs/DialogItem/DialogItem';
import Message from './components/Dialogs/Message/Message';
import Post from './components/Profile/myPosts/Post/Post';

let dialogsData = [
  { id: '1', name: 'Irina' },
  { id: '2', name: 'Bogdan' },
  { id: '3', name: 'Dima' },
  { id: '4', name: 'Vlad' },
  { id: '5', name: 'Andrey' },
  { id: '6', name: 'Anton' }
];
let dialogsElements = dialogsData.map( dialog => <DialogItem
  id={dialog.id} name={dialog.name} />);


let messagesData =
 [
     { id: '1', message: "Call me!" },
     { id: '2', message: "How are you?" },
     { id: '3', message: "Buy a tea on back way,please" },
     { id: '4', message: "Do you have money?" }
 ];
 
 let messagesElements = messagesData.map(message => <Message message= {message.message}/>)

 let postsData = 
  [
    {id: '1', post: 'Hi,people? Who want on my party?', likesCount: '3'},
    {id: '2', post: 'I bought a new TV!', likesCount: '6'},
    {id: '3', post: 'I wanna to the moon', likesCount: '3'},
    {id: '4', post: 'What do you think about  politic in your country?', likesCount: '3'},
    {id: '5', post: 'I have a birthday today! Congratulate me!', likesCount: '3'},
    {id: '6', post: 'I\'m using this network', likesCount: '3'},
  ]
  let posts = postsData.map(post => <Post message={post.post} likeCount= {post.likesCount} />)

ReactDOM.render(
  
  <React.StrictMode>
    <App dialogsItem={dialogsElements} messageItem={messagesElements} posts ={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
