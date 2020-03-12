import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBH3dEqtnrSM3r51pDzc2W6itnqpc7-cxE",
    authDomain: "nomad-db-245ba.firebaseapp.com",
    databaseURL: "https://nomad-db-245ba.firebaseio.com",
    projectId: "nomad-db-245ba",
    storageBucket: "nomad-db-245ba.appspot.com",
    messagingSenderId: "97145821110",
    appId: "1:97145821110:web:c7fa2ccc41cc7ae2401317"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;