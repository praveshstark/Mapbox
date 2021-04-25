import React from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NewUser from './components/NewUser'
import Signup from './components/Signup'
import Home from './components/Home'
import { Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return (
     <>
     <Switch>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Signup" component={Signup} />
    </Switch> 
    <Redirect to="/Home"/>   
    </>
  )
}

export default App;
