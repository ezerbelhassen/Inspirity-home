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

  document.getElementById('feedback-form').addEventListener('submit', submitForm);
function submitForm(e){
    e.preventDefault();
    // Get values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;  
  saveMessage(name, email, message);

}
 // References the messages collection
var messagesRef= firebase.database().ref('message');
// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email, 
    message:message,
  });
}
