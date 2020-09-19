import React, {useState,useEffect} from 'react';
import firebase from './firebase';
import LoadingScreen from './components/LoadingScreen'
import './App.css';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
/*var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore"); - Using all firebase features*/
function App() {
  const [loggedin, setisloggedin] = useState(-1);
  const [isauthorized, setisauthorized] = useState(false);

// useEffect must be used otherwise the set... functions will continuously rerender,
//which can crash the dom
  firebase.auth().onAuthStateChanged(function(user){
    setisloggedin(user);
    if (user !== null) {
      if (/@rchk.edu.hk/.test(user.email)) {
        setisauthorized(true);
      }
    }
  });

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
