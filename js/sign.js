  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAVec1yxUJbERcLE3sDO5SSXvahCGf25bg",
    authDomain: "inspirity-fd752.firebaseapp.com",
    databaseURL: "https://inspirity-fd752.firebaseio.com",
    projectId: "inspirity-fd752",
    storageBucket: "inspirity-fd752.appspot.com",
    messagingSenderId: "856263474498"
  };
  firebase.initializeApp(config);

    // Get values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

firebase.auth().createUserWithEmailAndPassword(email, password,).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://inspirity-fd752.firebaseio.com"
});

firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
  saveMessage(email, password,);