
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAYqosXgR5C9sio4z4UbDrPMf9-oh438nc",
    authDomain: "doitbetter-a8842.firebaseapp.com",
    projectId: "doitbetter-a8842",
    storageBucket: "doitbetter-a8842.appspot.com",
    messagingSenderId: "727840464305",
    appId: "1:727840464305:web:e52e7e4f7b32756c44f190",
    measurementId: "G-YVQ61T4B42"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
