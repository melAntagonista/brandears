import React, { Component } from 'react';
// import logo from '../design/logo.svg';
// import '../design/App.css';
import Navbar from './Navbar';
import Discover from './Discover';
import Graph from './Graph';
import Intro from './Intro';
import { Route, BrowserRouter } from 'react-router-dom';
import AppLogin from './AppLogin';

class App extends Component {

  componentDidMount(){
    let res = fetch('/test')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={""} className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to Brande@rs</h1>
        </header>
        <BrowserRouter>
        <Navbar />
          <Route exact path='/' component={Intro}/>
          <Route path='/login' component={AppLogin} />
          <Route path='/discover' component={Discover} />
          <Route path='/graph' component={Graph} />
        </BrowserRouter>
      </div>
    );
  }
}

 export default App