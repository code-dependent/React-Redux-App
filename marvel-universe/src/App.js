import React, { useEffect } from 'react';
import './App.css';
import Comics from './components/Comics'
import Hero from './components/Hero'
import HeroInput from './components/heroInput'
import {Fade} from 'reactstrap'
import {
  Switch,
  Route} from "react-router-dom";


function App() {

  return (
    <div className="App">

      <Switch>


        <Route exact path='/'>
      <Fade style={{
        margin:'0 auto',
        color:'white', 
        fontSize:'3rem', 
        width:'25%', 
        textShadow:'2px 2px black', 
        backgroundColor:'red', 
        fontWeight:'900',
        textAlign:'center'}}
        tag='h1' 
        className='mt-5 mb-5'>Marvel Universe</Fade>
          <HeroInput/>
        </Route>

        <Route path='/hero'>
          <Hero/>
        </Route>

        <Route>
          <Comics path='/comics' />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
