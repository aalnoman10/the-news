import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAmNovFEH-EHXsQF74wJUfrpiEJcQbA5KM",
    authDomain: "the-news-b9d69.firebaseapp.com",
    projectId: "the-news-b9d69",
    storageBucket: "the-news-b9d69.appspot.com",
    messagingSenderId: "940639166587",
    appId: "1:940639166587:web:c130a802499afa190a82de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app