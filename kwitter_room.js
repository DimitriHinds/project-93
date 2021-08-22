// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDY8ahs-VwcWUhOkwpZwhc6l7CoVxeRVLw",
      authDomain: "kwitter-14f83.firebaseapp.com",
      databaseURL: "https://kwitter-14f83-default-rtdb.firebaseio.com",
      projectId: "kwitter-14f83",
      storageBucket: "kwitter-14f83.appspot.com",
      messagingSenderId: "602196454262",
      appId: "1:602196454262:web:47203a1a8245fcaf736857"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
