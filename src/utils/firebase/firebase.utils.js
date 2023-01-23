import { initializeApp } from "firebase/app";

// Add Firebase to your JavaScript project
// https://firebase.google.com/docs/web/setup

// for authenticating process
import {
    getAuth,                        // returns the Auth instance
    signInWithRedirect,             // use with Google Authentication sign-in provider
    signInWithPopup,                // use with Google Authentication sign-in provider
    createUserWithEmailAndPassword, // use with email/password Sign-in provider
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

// For database access and management processes
// Firestore is a document database
import {
    getFirestore,   // get the firestore instance
    doc,            // document reference instance
    getDoc,         // read the document
    setDoc,         // writes to the document
    collection,
    writeBatch,
    query,          // query to be passed to getDocs
    getDocs,        // the data
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD75KuiXoOrAE3DuvQEQp4yBrP-fV9prsc",
    authDomain: "audiophile-db.firebaseapp.com",
    projectId: "audiophile-db",
    storageBucket: "audiophile-db.appspot.com",
    messagingSenderId: "363081340953",
    appId: "1:363081340953:web:6aa0964a640d1e3edeb288"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// AUTHENTICATION SECTION
// you can have different providers like FB, Github, etc.
const googleProvider = new GoogleAuthProvider();

// configuration for google 
googleProvider.setCustomParameters({
    prompt: 'select_account',
})

// auth is a singleton that tracks all authentication in our app
export const auth = getAuth(); // returns the Auth instance

// imported in sign-in component
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider); // returns the authentication object
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
// END AUTHENTICATION SECTION

// DATABASE OPERATIONS
export const db = getFirestore(); // this directly points to our database in the firebase console.

// Use to upload data to firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.category.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
}

// Get the products/categories data from firestore.
export const getCollectionsAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
    //     .reduce((acc, docSnapshot) => {
    //     const { category, items } = docSnapshot.data();
    //     acc[category.toLowerCase()] = items;
    //     return acc;
    // }, {});

    //return categoryMap;
}


// an sync function that receives an authenticated user's object
// where userAuth is what we get from the Google authentication service above, (signInWithGooglePopUp).
// A function that takes data from the google authentication service 
// and then store it to our firestore database
// imported in sign-in component

// https://firebase.google.com/docs/firestore/manage-data/add-data

// use with Google Authentication sign-in provider
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {

    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);
    //console.log(userDocRef);

    // In this object, we can use methods like .exists() 
    // to check if the data is already in the database
    const userSnapshot = await getDoc(userDocRef); // user data
    // console.log(userSnapshot.exists()); // return a boolean

    // Create User

    // if the record does not exists, create it
    if (!userSnapshot.exists()) {
        // get the name and email
        const { displayName, email } = userAuth;
        // add a date
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        }
        catch (error) {
            console.log('Error creating the user.', error.message);
        }
    }

    // if the record does exists
    return userDocRef;
}

// wrap firebase functions to protect our app if google changes
// how things work on their end.
export const createAuthUserFromEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback);
}



// Reference
// https://firebase.google.com/docs/firestore/data-model