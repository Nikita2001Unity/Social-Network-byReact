import './App.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About/About';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <SideBar state={props.state.sideBar}/>
        <div className="app-wrapper-content">
          <Route path="/dialogs" 
          render={()=><Dialogs 
            state={props.state.dialogsPage} 
            />} />
          <Route path="/profile" 
          render={()=><Profile state={props.state.profilePage}/>} />
          <Route path="/news" render={()=><News/>} />
          <Route path="/music" render={()=><Music/>} />
          <Route path="/setings" render={()=><Settings/>} />
          <Route path="/about" render={()=><About/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
