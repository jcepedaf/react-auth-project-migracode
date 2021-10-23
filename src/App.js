import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Singup from './components/Singup/Singup';
import Login from './components/Login/Login';

function App() {

  


  const [token, setToken] = useState();
  if(token) {
    return (
      <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Login setToken={setToken} />
          </Route>
        </Switch>
      </BrowserRouter>
      <p><a href="http://localhost:3000/home">Home</a></p>
      <p><a href="http://localhost:3000/singup">Singup</a></p>
      <p><a href="http://localhost:3000/singin">Singin</a></p>
    </div>
    )
  };

  return (
    <div className="wrapper">
      <div>
      <h1>Application</h1>
      <p><a href="http://localhost:3000/home">Home</a></p>
      <p><a href="http://localhost:3000/singup">Singup</a></p>
      <p><a href="http://localhost:3000/singin">Singin</a></p>
      </div>
      <div>
      <BrowserRouter>
        <Switch>
        <Route path="/singin">
            <Login setToken={setToken} />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/singup">
            <Singup />
          </Route>
        </Switch>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;