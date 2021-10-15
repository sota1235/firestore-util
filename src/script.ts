import admin from 'firebase-admin';

function main() {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: process.env.FIREBASE_PROJECT_ID,
  });

  const db = admin.firestore();

  async function fetchDoc(collection: string, docId: string) {
    const querySnapshot = await db.collection(collection).doc(docId).get();
    return querySnapshot.data();
  }

  console.log('hello, world');

  // set global variables
  global.db = db;
  global.fetchDoc = fetchDoc;
}

main();
