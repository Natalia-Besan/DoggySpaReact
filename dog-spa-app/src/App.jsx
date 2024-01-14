
import './App.css';
import React from 'react';
import {Header} from './components/Header';
import {Banner} from './components/Banner';
import {Main} from "./components/Main";
import logo from "./images/logo.svg";

 export function App() {
  return (
    <>
      <div className="App"></div>
      
      <Header />
      <Banner />
      <Main />
    </>
  );
}


