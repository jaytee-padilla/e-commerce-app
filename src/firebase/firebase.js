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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  // This is a QUERY, in other words, I am requesting data from the firestore
  // A QUERY REFERENCE is returned containing the info requested
  // The query reference object does not have the actual data of the collection or document. It instead has properties that tell me details about it, or the method to get the SNAPSHOT object which gives me the data I'm looking for

  // The DOCUMENT REFERENCE object returned from a query is what enables CRUD functionality to be performed
  // In this case, the DOCUMENT REFERENCE being returned is being stored in a var called "userRef"
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // The SNAPSHOT only contains the data of a query. Therefore, no CRUD can be performed on the SNAPSHOT
  const snapshot = await userRef.get();

  // If the snapshot does not contain any data, then create new data in its place
  // In this case, create a new piece of data containing the displayName, email, createdAt, and any additional data provided by the user upon logging in
  if(!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

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