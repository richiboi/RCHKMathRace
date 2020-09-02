import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import LoadingScreen from './components/LoadingScreen'
import './App.css';

import axios from "axios"
function App() {
  const [loggedin, setisloggedin] = useState(-1)
  const [isauthorized, setisauthorized] = useState(false)

  /*useEffect(() => {
    setisloggedin(!!user);
      if (user !== null) {
        if (/@rchk.edu.hk/.test(user.email)) {
          setIsAuthorized(true);
        }
    }
  });*/
  
  if(!isauthorized){
    return (
      <LoadingScreen/>
    );
  }
  else{
    return (
      <div>
        <h1>SO COOL</h1>
      </div>
    );
  }
}

export default App;

// Default stuff - probs deleted later
/*  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>*/
