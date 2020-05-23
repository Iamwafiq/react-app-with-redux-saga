import React from 'react';
import history from './history';
import LoginPage from "./loginPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router history={history} >
      <Switch>
        <Route
          exact
          path="/" 
          component={LoginPage}
        />
      </Switch>
    </Router>
    
  );
}

export default App;
