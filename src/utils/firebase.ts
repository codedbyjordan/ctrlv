import { initializeApp } from 'firebase/app';
import { doc, setDoc, getDoc, getFirestore, DocumentSnapshot } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
dotenv.config();

const firebaseConfig: object = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: 'ctrlv-43cac.firebaseapp.com',
	projectId: 'ctrlv-43cac',
	storageBucket: 'ctrlv-43cac.appspot.com',
	messagingSenderId: '1088726446634',
	appId: '1:1088726446634:web:a34226b846c8b6ba970953'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const dbAdd = async (code: string, language: string = 'auto'): Promise<string> => {
	const docId: string = uuidv4();
	await setDoc(doc(db, 'pastes', docId), {
		code,
		language
	});

	return docId;
};

export const getPaste = async (id: string) => {
	const pasteRef = doc(db, 'pastes', id);
	let paste: DocumentSnapshot<any> = await getDoc(pasteRef);

	return paste.data();
};
