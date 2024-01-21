import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

async function fetchList(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

async function createDocument(collectionName, newData) {
  try {
    const docRef = await addDoc(collection(db, collectionName), newData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    return null;
  }
}

async function deleteDocument(collectionName, documentId) {
  try {
    await deleteDoc(doc(db, collectionName, documentId));
    return true;
  } catch (error) {
    console.error("Error deleting document: ", error);
    return false;
  }
}

async function updateDocument(collectionName, documentId, updatedData) {
  try {
    const docRef = doc(db, collectionName, documentId);
    await updateDoc(docRef, updatedData);
    return true;
  } catch (error) {
    console.error("Error updating document: ", error);
    return false;
  }
}

async function getDetail(collectionName, documentId) {
  try {
    const docRef = doc(db, collectionName, documentId);
    const documentSnapshot = await getDoc(docRef);
    if (documentSnapshot.exists()) {
      return { id: documentSnapshot.id, ...documentSnapshot.data() };
    } else {
      console.error("Document does not exist");
      return null;
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    return null;
  }
}

export const fireStoreService = {
  fetchList,
  createDocument,
  deleteDocument,
  updateDocument,
  getDetail,
};
