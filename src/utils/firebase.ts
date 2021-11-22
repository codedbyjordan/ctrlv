import { initializeApp } from 'firebase/app';
import { doc, setDoc, getDoc, getFirestore, DocumentSnapshot } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig: object = {
	apiKey: 'AIzaSyAzIB_8N788qjNbb95uNPWqcKzY6kqZggs',
	authDomain: 'ctrlv-bebf2.firebaseapp.com',
	projectId: 'ctrlv-bebf2',
	storageBucket: 'ctrlv-bebf2.appspot.com',
	messagingSenderId: '394344671504',
	appId: '1:394344671504:web:e50b037ea3224a7a931d95',
	measurementId: 'G-89F2VVXX5L'
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
