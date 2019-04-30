import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound.js/NotFound';
import './App.scss';

const App = () => {
  return (
    <Router>
      <section>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route component={ NotFound } />
        </Switch>
      </section>
    </Router>
  );
};

export default App;