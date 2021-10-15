import { firestore } from 'firebase-admin';
import Firestore = firestore.Firestore;

declare global {
  namespace NodeJS {
    interface Global {
      db: Firestore
      fetchDoc: (collection: string, docId: string) => any;
    }
  }
}

