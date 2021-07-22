
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAcYtxypFAc4vMDVVwizUU_bXYgs5VWAZA",
      authDomain: "quitter-75046.firebaseapp.com",
      projectId: "quitter-75046",
      storageBucket: "quitter-75046.appspot.com",
      messagingSenderId: "359633862239",
      appId: "1:359633862239:web:c94c2c85ba13300ae0e5ea"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
