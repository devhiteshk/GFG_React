import React from 'react';
import './components/styles/commonStyles.css'
import Header from './components/Common/Header';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import './index.css';
import { Routes ,Route } from 'react-router-dom';

 export default class App extends React.Component {
  render(){
    return(
      <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
      </Routes>
      </React.Fragment>
    );
  }
}