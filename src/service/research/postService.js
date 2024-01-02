import { fireStoreService } from "@/service/firebase";

const COLLECTION_NAME = "posts";

async function fetchList() {
  const data = await fireStoreService.fetchList(COLLECTION_NAME);
  return data;
}

export const postService = {
  fetchList,
};
