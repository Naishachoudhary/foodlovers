function login() {
    name = document.getElementById("name").value;
    number = document.getElementById("number").value;
    localStorage.setItem("name", name);
    localStorage.setItem("number", number);
    window.location = "index_1.html"
}

/*var firebaseConfig = {
    apiKey: "AIzaSyDsya5SnGvXaZFHiYU9ikmw8CkvHRsegmc",
    authDomain: "food-lovers-246e0.firebaseapp.com",
    databaseURL: "https://food-lovers-246e0-default-rtdb.firebaseio.com",
    projectId: "food-lovers-246e0",
    storageBucket: "food-lovers-246e0.appspot.com",
    messagingSenderId: "509917279691",
    appId: "1:509917279691:web:ef01aea22d4b9aed84724e"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

name = localStorage.getItem("name");
number = localStorage.getItem("number");

function login() {
    //msg = document.getElementById("msg").value;
    firebase.database().ref(number).push({
          name: name,
          number:number      
    })
    //document.getElementById("msg").value = "";
}*/









