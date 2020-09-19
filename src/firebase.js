import firebase from 'firebase';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJTIChZ1FL476IR1iahwtdGDWiEYntBMk",
  authDomain: "rchkmathrace.firebaseapp.com",
  databaseURL: "https://rchkmathrace.firebaseio.com",
  projectId: "rchkmathrace",
  storageBucket: "rchkmathrace.appspot.com",
  messagingSenderId: "324463354971",
  appId: "1:324463354971:web:1648536dc9d72958edcb7e",
  measurementId: "G-ZRBV7WZX3Z"
};
// Initialize Firebase
class Firebase{
  constructor(){
    firebase.app.initializeApp(firebaseConfig);
    firebase.app.analytics();
  }
}
export default Firebase;
