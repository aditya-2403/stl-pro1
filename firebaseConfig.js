// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD_OSqntzJ5bo48WnJcYbm1SLosNT1As74",
  authDomain: "stl-backend.firebaseapp.com",
  projectId: "stl-backend",
  storageBucket: "stl-backend.appspot.com",
  messagingSenderId: "1004039116184",
  appId: "1:1004039116184:web:9ac2fd733ac3327a02c7ed"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the Firestore database
  var db = firebase.firestore();