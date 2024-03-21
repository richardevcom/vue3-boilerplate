import { fireStoreService } from "@/service/firebase";

const COLLECTION_NAME = "bills";

async function fetchList() {
  const data = await fireStoreService.fetchList(COLLECTION_NAME);
  return data;
}

async function deleteBill(id) {
  const data = await fireStoreService.deleteDocument(COLLECTION_NAME, id);
  return data;
}

async function createBill(postData) {
  const data = await fireStoreService.createDocument(COLLECTION_NAME, postData);
  return data;
}

async function updateBill(postData) {
  const data = await fireStoreService.updateDocument(
    COLLECTION_NAME,
    postData.id,
    postData
  );
  return data;
}

async function getDetail(postId) {
  const data = await fireStoreService.getDetail(COLLECTION_NAME, postId);
  return data;
}

export const billService = {
  fetchList,
  deleteBill,
  createBill,
  updateBill,
  getDetail,
};
