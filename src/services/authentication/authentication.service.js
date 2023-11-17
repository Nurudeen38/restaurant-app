import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXdTRKDkueAVyo9Z8LGsXkDLKhQ5lkw9c",
  authDomain: "restaurant-app-fb6bf.firebaseapp.com",
  projectId: "restaurant-app-fb6bf",
  storageBucket: "restaurant-app-fb6bf.appspot.com",
  messagingSenderId: "133793039065",
  appId: "1:133793039065:web:481b2bd8ea2bff5bc474c8",
  measurementId: "G-8BF4XFV4K8",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const loginRequest = (email, password) => {
  return app.auth().signInWithEmailAndPassword(email, password);
};

export const registerRequest = (email, password) => {
  return app.auth().createUserWithEmailAndPassword(email, password);
};

export const logout = () => {
  return app.auth().signOut();
};
export default app;
