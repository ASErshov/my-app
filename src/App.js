import React from 'react';
import './App.css';
import FirstSlide from './components/FirstSlide/FirstSlide';
import SecondSlide from './components/SecondSlide/SecondSlide';
import ThirdSlide from './components/ThirdSlide/ThirdSlide';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Redirect path="/" to = "/firstslide" />
        <Route path="/firstslide" component = {FirstSlide} />
        <Route path="/secondslide" component = {SecondSlide} />
        <Route path="/thirdslide" component = {ThirdSlide} />
      </div>
    </BrowserRouter>
  );
}

export default App;
