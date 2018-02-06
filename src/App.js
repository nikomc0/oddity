import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import { Provider, Toolbar, NavLink } from 'rebass';

import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Provider className="App">
        <Toolbar bg="#6eb642" color='white'>
          <NavLink color='white'><Link to="/">ODDITY</Link></NavLink>
          <NavLink ml="auto"><Link to="/">Home</Link></NavLink>
          <NavLink><Link to="Contact">Contact</Link></NavLink>
        </Toolbar>

        <main>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </main>
      </Provider>
    );
  }
}

export default App;
