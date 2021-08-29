    // Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBaI7cetNlQ8F3bTZBKCQfk58RW8T3PYfM",
  authDomain: "let-s-chat-a5483.firebaseapp.com",
  databaseURL: "https://let-s-chat-a5483-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-a5483",
  storageBucket: "let-s-chat-a5483.appspot.com",
  messagingSenderId: "836982605603",
  appId: "1:836982605603:web:e24eebfbdf1177973eee96"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}