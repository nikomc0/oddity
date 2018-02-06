import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './assets/ODDITY_Monster.png';
import './App.css';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>About</Link></li>
          <li><Link to='/'>Contact</Link></li>
        </nav>
        <header>
          <img src={logo} style={{ height: 100 }}></img>
        </header>
        <main>
          <Route exact path="/" component={Home} />
        </main>
      </div>
    );
  }
}

export default App;
