
import React from 'react';
import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCSzh_Z0D15cV19wyPZCQye2eoDLplS6Og",
  authDomain: "myfinapp-c7dc3.firebaseapp.com",
  databaseURL:"https://myfinapp-c7dc3.appspot.com",
  projectId: "myfinapp-c7dc3",
  storageBucket: "myfinapp-c7dc3.appspot.com",
  messagingSenderId: "664040588414",
  appId: "1:664040588414:web:417ecc66bf97480c7dc42f"
  
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
else{
  firebase.app();
}




export  {firebase,Auth, firestore};

