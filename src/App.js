import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Following from './pages/Following/Following'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/following" component={Following} />
      </Switch>
    </Router>
  );
}

export default App;
