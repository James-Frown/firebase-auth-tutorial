// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoCp7gqVmNlUkLzCZ1HwkDbEPBP5sM_j4",
  authDomain: "fake-online-store-6290f.firebaseapp.com",
  projectId: "fake-online-store-6290f",
  storageBucket: "fake-online-store-6290f.appspot.com",
  messagingSenderId: "809591443125",
  appId: "1:809591443125:web:b7fb9f5ea1d5c6b65bf8fc",
  measurementId: "G-P0EC49W21J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export function to initialize firebase
export const initFirebase = () => {
    return app;
}