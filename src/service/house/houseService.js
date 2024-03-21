import { fireStoreService } from "@/service/firebase";

const COLLECTION_NAME = "houses";

async function fetchList() {
  const data = await fireStoreService.fetchList(COLLECTION_NAME);
  return data;
}

async function deleteHouse(id) {
  const data = await fireStoreService.deleteDocument(COLLECTION_NAME, id);
  return data;
}

async function createHouse(postData) {
  const data = await fireStoreService.createDocument(COLLECTION_NAME, postData);
  return data;
}

async function updateHouse(postData) {
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

export const houseService = {
  fetchList,
  deleteHouse,
  createHouse,
  updateHouse,
  getDetail,
};
