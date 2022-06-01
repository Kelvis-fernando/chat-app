import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyAB761Y3rdis3EFhglDm55lKuUAj8OSoCo",
   authDomain: "chat-app-1b664.firebaseapp.com",
   projectId: "chat-app-1b664",
   storageBucket: "chat-app-1b664.appspot.com",
   messagingSenderId: "187865427589",
   appId: "1:187865427589:web:7ef60d276ab167692343ec",
   measurementId: "G-CRL4BX6H1Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
