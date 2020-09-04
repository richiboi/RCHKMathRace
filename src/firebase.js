import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDAYXN1kVSiyFHELZvYOfwdPMcKrCNjnIQ",
  authDomain: "rchk-math-race-e5fc9.firebaseapp.com",
  databaseURL: "https://rchk-math-race-e5fc9.firebaseio.com",
  projectId: "rchk-math-race-e5fc9",
  storageBucket: "rchk-math-race-e5fc9.appspot.com",
  messagingSenderId: "624260181737",
  appId: "1:624260181737:web:69cdcaa960db4ccbff0a78",
  measurementId: "G-X8D3BMLNYH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
