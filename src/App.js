import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import Nav from './components/Nav';

import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <section className="App">
        <Nav />

        <main>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </main>
      </section>
    );
  }
}

export default App;
