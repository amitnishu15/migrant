//import React from 'react';
import React, { useState, useEffect } from 'react';  //L
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layouts/Navbar'
import SubNavbar from './components/layouts/SubNavbar'
import Footer from './components/layouts/Footer'
import ChatBott from './components/migrant/ChatBott'
import MarqueeLine from './components/migrant/MarqueeLine'

// React Router Import 
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contacts from './components/pages/Contacts';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';
// Learning
import Jokes from './components/learning/Jokes'
import RefUseRef from './components/learning/RefUseRef'
import RefUseRef2 from './components/learning/RefUseRef2'
import Fragmenttt from './components/learning/Fragmenttt'
import ContextApi from './components/learning/ContextApi'
import ContextApiC from './components/learning/ContextApiC'
//Migrant Portal

function App() {
  const getMode = ()=>{
    return JSON.parse(localStorage.getItem("mode")) || false
  }
  const[dark,setMode] = useState(getMode());
  useEffect(()=>{
    localStorage.setItem("mode", JSON.stringify(dark))
  },[dark])
  return (
    <div className={dark ? "App dark-mode":"App"}>
      {/* Learning */}
      {/* <div>
        <label className="switch">
          <input type="checkbox" checked={dark} onChange={() => setMode(!dark)} />
          <span className="slider round"></span>
        </label>
      </div>
      <Jokes />
      <RefUseRef />
      <RefUseRef2 />
      <Fragmenttt />
      <ContextApi />
      <ContextApiC /> */}
      <Navbar />
      <SubNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/details" component={Details} />
        <Route component={NotFoundPage} />
      </Switch>
      <ChatBott />
      <Footer />
    </div>
  );
}

export default App;
