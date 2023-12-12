import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3yXWp9_ajOLHa4HLkI93ew8qhnc8qj1c",
  authDomain: "cba-app-92b8a.firebaseapp.com",
  projectId: "cba-app-92b8a",
  storageBucket: "cba-app-92b8a.appspot.com",
  messagingSenderId: "903019538208",
  appId: "1:903019538208:web:aa2bfa583827b1b572d945"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider >
    <App />
  </ChakraProvider>
)
