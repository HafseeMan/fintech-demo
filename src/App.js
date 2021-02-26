import React, { Component } from 'react';

import {Switch,Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './components/Details';
import Default from './components/Default';
import Loan from './components/Loan';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
          <Switch>
              <Loan/>
            <Route component={Default}/>
          </Switch>

      </React.Fragment>
      
    );
  }
}

export default App;
