import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// components
import HomePage from './pages/homepage/homepage';

const FootwearPage = () => (
  <div>
    <h1>Footwear Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/footwear' component={FootwearPage} />
      </Switch>
    </div>
  );
}

export default App;