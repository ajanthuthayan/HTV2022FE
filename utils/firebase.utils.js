// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

import { getAnalytics } from "firebase/analytics";

import {
	getFirestore,
	collection,
	getDocs,
	doc,
	setDoc,
	getDoc,
	query,
	updateDoc,
	arrayUnion,
	arrayRemove,
} from "firebase/firestore";


const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
	authDomain: "hackthevalley22.firebaseapp.com",
	projectId: "hackthevalley22",
	storageBucket: "hackthevalley22.appspot.com",
	messagingSenderId: "341870125072",
	appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
	measurementId: "G-KH6RJWJ0BQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const db = getFirestore();

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const createUserDocumentFromAuth = async (userAuth) => {

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const { displayName, email, photoURL} = userAuth;
        const createdAt = new Date();
        const userObj = {
            displayName,
            email,
            followedUsers: ['0'],
            previouslyWatched: [''],
            currentlyWatching: '',
            createdAt,
            photoURL, 
        };

        try {
            await setDoc(userDocRef, userObj);
            
        } catch (error) {
            console.log(`error creating the user: ${error.message}`);
        }
    }

    return userAuth;
    
}

export const addPrevOrFollowed = async (field, data) => {
	const uid = localStorage.getItem("userId");
	const userRef = doc(db, "users", uid);
	try {
		await updateDoc(userRef, {
			[field]: arrayUnion(data),
		});
	} catch (error) {
		console.error(error);
	}
};

export const removePrevOrFollowed = async (field, data) => {
	const uid = localStorage.getItem("userId");
	const userRef = doc(db, "users", uid);
	try {
		await updateDoc(userRef, {
			[field]: arrayRemove(data),
		});
	} catch (error) {
		console.error(error);
	}
};

export const getUserInformation = async () => {
	const collectionRef = collection(db, "users");
	const q = query(collectionRef);
	var users = [];
	const querySnapshot = await getDocs(q);

    querySnapshot.docs.reduce((acc, docSnapshot) => {
        users.push(docSnapshot.data());
    }, {});
    
    return users;
};


export const signOutUser = () => {
	localStorage.removeItem("userId");
};
