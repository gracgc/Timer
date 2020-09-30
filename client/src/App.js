import React from 'react';
import './App.css';
import TimerForAdmin from "./components/Timer/TimerForAdmin";
import TimerForClient from "./components/Timer/TimerForClient";
import {Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path='/'
                   render={() => <Redirect to={"/client"}/>}/>
            <Route path='/admin' render={() => <TimerForAdmin/>}/>
            <Route path='/client' render={() => <TimerForClient/>}/>
        </Switch>
    </div>
  );
}

export default App;
