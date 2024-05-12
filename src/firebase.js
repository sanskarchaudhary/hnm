// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDGf_94uskCw5xhm8WpCN7DyFH0QCkZYqc",
    authDomain: "hunger-no-more-4f8f3.firebaseapp.com",
    projectId: "hunger-no-more-4f8f3",
    storageBucket: "hunger-no-more-4f8f3.appspot.com",
    messagingSenderId: "397589334042",
    appId: "1:397589334042:web:2dc2f5839ba3fc9a2269a3",
    measurementId: "G-P9E8JXX6CJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app,auth,analytics };
