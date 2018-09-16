import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDQD3mnXF_CYr1dHhPkfRcCBrFyIkc_5gg",
  authDomain: "find-different-character.firebaseapp.com",
  databaseURL: "https://find-different-character.firebaseio.com",
  projectId: "find-different-character",
  storageBucket: "find-different-character.appspot.com",
  messagingSenderId: "363997376265"
};
firebase.initializeApp(config);

export default firebase