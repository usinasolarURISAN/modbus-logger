import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from './firebase.service';

export const Firestore = getFirestore(app);

class FirestoreService {
  firestore = Firestore;

  addNewDoc = async (object: any, collectionName = 'epever') => {
    try {
      const docRef = await addDoc(
        collection(Firestore, collectionName),
        object
      );

      console.log(`\n[FIRESTORE] - Document written with ID: ${docRef.id}\n`);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
}

export default FirestoreService;
