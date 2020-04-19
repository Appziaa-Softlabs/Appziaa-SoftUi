import React from 'react';
import HomePage from '../src/Components/homepage';
import StoreListing from '../src/Components/storeList';
import Index from '../src/Components/Index'
import LoginForm from '../src/Components/login-form'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Router } from 'react-router-dom';
import history from './history'
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/storeListing' component={StoreListing} />
          <Route path='/storeListing/index' component={Index}></Route>
          <Route path='/StoreListing/index/login-Form' component={LoginForm}></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
