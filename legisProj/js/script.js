// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCYY91YQo5QTriyzhjt7d_UqSpY7Fod8jM",
    authDomain: "proclegis-810dc.firebaseapp.com",
    projectId: "proclegis-810dc",
    storageBucket: "proclegis-810dc.appspot.com",
    messagingSenderId: "664177340102",
    appId: "1:664177340102:web:f49bd784130dfbe806b1c7",
    measurementId: "G-G27T970E8N"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);



//classes para requisição do formulário
