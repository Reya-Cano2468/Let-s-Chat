var firebaseConfig = {
  apiKey: "AIzaSyB8WSrQF3S7abMx-wv6Z9N-Y1VUVEuBGDs",
  authDomain: "kwitter2-a7cec.firebaseapp.com",
  databaseURL: "https://kwitter2-a7cec-default-rtdb.firebaseio.com",
  projectId: "kwitter2-a7cec",
  storageBucket: "kwitter2-a7cec.appspot.com",
  messagingSenderId: "823148878228",
  appId: "1:823148878228:web:20daab31cc522253ea9781",
  measurementId: "G-WN75BTF38Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome   " + user_name;

function addRoom() {
  room_name = document.getElementById("add_room").value;

  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name)
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              //Start code
              console.log("Room Name -" +Room_names);
              row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names+" </div><hr>";
              document.getElementById("output").innerHTML += row;
              //End code
        });
  });
}
getData();

function redirectToRoomName(name){
  console.log(name)
  localStorage.setItem("room_name" ,name);
  window.location = "kwitter_page.html"

}
function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}