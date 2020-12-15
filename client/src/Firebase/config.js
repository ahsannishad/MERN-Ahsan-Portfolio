import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration

var firebaseConfig = {
	apiKey: "AIzaSyChvm_ZEMaa-ryIJM9kMzP-CVR2a2D5IkI",
	authDomain: "ahsan-mern-portfolio.firebaseapp.com",
	projectId: "ahsan-mern-portfolio",
	storageBucket: "ahsan-mern-portfolio.appspot.com",
	messagingSenderId: "1080242549265",
	appId: "1:1080242549265:web:8410bd1c2514965d30b7b0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const fireStorage = firebase.storage();

export { fireStorage };
