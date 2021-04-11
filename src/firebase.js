// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDo-ji2gAT5lyOPXQuzFI38SHgTybMg9-A',
	authDomain: 'clone-netflix-v2.firebaseapp.com',
	projectId: 'clone-netflix-v2',
	storageBucket: 'clone-netflix-v2.appspot.com',
	messagingSenderId: '288691901300',
	appId: '1:288691901300:web:99df90bc72f90da77a5221',
	measurementId: 'G-7RGMK0CMFC',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
