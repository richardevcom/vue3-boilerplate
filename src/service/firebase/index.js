import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

async function fetchList(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
}

export const fireStoreService = {
    fetchList,
};
