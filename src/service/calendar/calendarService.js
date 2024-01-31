import { fireStoreService } from "@/service/firebase";

const COLLECTION_NAME = "calendars";

async function fetchList() {
  const data = await fireStoreService.fetchList(COLLECTION_NAME);
  return data;
}

async function deleteCalendar(id) {
  const data = await fireStoreService.deleteDocument(COLLECTION_NAME, id);
  return data;
}

async function createCalendar(calendarData) {
  const data = await fireStoreService.createDocument(
    COLLECTION_NAME,
    calendarData
  );
  return data;
}

async function updateCalendar(calendarData) {
  const data = await fireStoreService.updateDocument(
    COLLECTION_NAME,
    calendarData.id,
    calendarData
  );
  return data;
}

async function getDetail(calendarId) {
  const data = await fireStoreService.getDetail(COLLECTION_NAME, calendarId);
  return data;
}

export const calendarService = {
  fetchList,
  deleteCalendar,
  createCalendar,
  updateCalendar,
  getDetail,
};
