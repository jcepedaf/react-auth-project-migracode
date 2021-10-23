import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';

import Login from './components/Login/Login';

function App() {

  


  const [token, setToken] = useState();
  if(!token) {
    return (
      
            <Login setToken={setToken} />
         
      
    
    )
  };

  return (
    <div className="wrapper">
      <h1>Application</h1>
        
      
      <BrowserRouter>
        <Switch>
        
          <Route path="/home">
            <Home />
          </Route>
          
        </Switch>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;