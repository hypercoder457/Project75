import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD6m-9GWMSWfJiOoBcW9DUXdJiUlehKHtE",
  authDomain: "e-ride-s4.firebaseapp.com",
  projectId: "e-ride-s4",
  storageBucket: "e-ride-s4.appspot.com",
  messagingSenderId: "45437878521",
  appId: "1:45437878521:web:10409e0b3462f01c16e228"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export default db;
