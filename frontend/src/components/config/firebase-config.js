import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBCWeEXKQ6vMARNydXDWoQinQ2bvHDwXj8",
  authDomain: "appointment-scheduler-d7e8c.firebaseapp.com",
  projectId: "appointment-scheduler-d7e8c",
  storageBucket: "appointment-scheduler-d7e8c.appspot.com",
  messagingSenderId: "745717466154",
  appId: "1:745717466154:web:0983ed00d5edf4b503af53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
