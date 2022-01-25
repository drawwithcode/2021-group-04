// Load and initialize Firebase
async function firebaseSetup() {
  console.log("firebase is loading");

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCpJjiNjUB6No4oeokno1r3_51gMgWKV_o",
    authDomain: "metanoise-fe0c8.firebaseapp.com",
    projectId: "metanoise-fe0c8",
    storageBucket: "metanoise-fe0c8.appspot.com",
    messagingSenderId: "976903454500",
    appId: "1:976903454500:web:3f96d3a67d3435d050fdb1",
    // add your database
    databaseURL:
      "https://metanoise-fe0c8-default-rtdb.europe-west1.firebasedatabase.app/",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // retrieve the greetings
  // onValue(greetingsRef, (snapshot) => {
  //   console.log(snapshot.val());
  //   allGreetings = snapshot.val();
  // });

  // add greetings
  // addGreeting = function (properties) {
  //   // create a reference
  //   const newGreetingRef = push(greetingsRef);
  //   //add data to the database
  //   set(newGreetingRef, properties);
  // };
}

// firebaseSetup();
