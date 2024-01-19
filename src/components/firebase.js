// /*************************/

// // Doblemente comentado

// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// /*************************/

// import firebase from "firebase";

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDXvsscB4Wg-BfScxTEuCQtli7tO_h2MbU",
//   authDomain: "clone-94260.firebaseapp.com",
//   projectId: "clone-94260",
//   storageBucket: "clone-94260.appspot.com",
//   messagingSenderId: "974831896737",
//   appId: "1:974831896737:web:ce05ce8ad466da6d1e08e0",
//   measurementId: "G-T5J4RZVDV5",
// };

// /*************************/

// // Doblemente comentado

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// /*************************/

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

// import firebase from "firebase";

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDXvsscB4Wg-BfScxTEuCQtli7tO_h2MbU",
//   authDomain: "clone-94260.firebaseapp.com",
//   projectId: "clone-94260",
//   storageBucket: "clone-94260.appspot.com",
//   messagingSenderId: "974831896737",
//   appId: "1:974831896737:web:ce05ce8ad466da6d1e08e0",
//   measurementId: "G-T5J4RZVDV5",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// // const auth = firebase.auth();

// export { db, auth };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDXvsscB4Wg-BfScxTEuCQtli7tO_h2MbU",
  authDomain: "clone-94260.firebaseapp.com",
  projectId: "clone-94260",
  storageBucket: "clone-94260.appspot.com",
  messagingSenderId: "974831896737",
  appId: "1:974831896737:web:ce05ce8ad466da6d1e08e0",
  measurementId: "G-T5J4RZVDV5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//Obtenemos la DB
const db = getFirestore(app);

export { auth, db };
