import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZyGMKpyaHcOksCwFtG1Hkja3jYR_ZZIg",
  authDomain: "quai-antique-6e4ca.firebaseapp.com",
  databaseURL:
    "https://quai-antique-6e4ca-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quai-antique-6e4ca",
  storageBucket: "quai-antique-6e4ca.appspot.com",
  messagingSenderId: "690686785228",
  appId: "1:690686785228:web:43660014548513b2bd7469",
};

const app = initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
