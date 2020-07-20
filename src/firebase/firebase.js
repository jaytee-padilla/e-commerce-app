import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCQH0R1dr4avobSC7rRMg7-dGy4N7yQRXg",
  authDomain: "skateshop-db.firebaseapp.com",
  databaseURL: "https://skateshop-db.firebaseio.com",
  projectId: "skateshop-db",
  storageBucket: "skateshop-db.appspot.com",
  messagingSenderId: "593578539913",
  appId: "1:593578539913:web:60bab59eed312db53c7f58",
  measurementId: "G-XR9T1NZS4Q"
};

// initializes firebase app ("skateshop-db")
firebase.initializeApp(config);

// this variable will be used anywhere authentication is needed (hence the 'export' keyword)
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// ***** This code enables google authentication *****
const provider = new firebase.auth.GoogleAuthProvider();
// Always trigger google pop-up whenever the google auth provider is used for authentication/sign-in
provider.setCustomParameters({ prompt: 'select_account '});
// This allows the pop-up to have specific access to Google's authentication features (there are other pop-up authentication methods for things such as twitter, facebook, etc.)
export const signInWithGoogle = () => auth.signInWithPopup(provider);
// ***** This code enables google authentication END *****

export default firebase;