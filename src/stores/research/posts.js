import { defineStore } from "pinia";
import { postService } from "@/service/research";
export const usePostStore = defineStore({
  id: "research-post",
  state: () => ({
    list: {
      data: [],
      isLoading: false,
      isError: false,
    },
    detail: {
      data: {},
      isLoading: false,
      isError: false,
    },
    add: {
      isLoading: false,
      isError: false,
      isAdded: false,
    },
  }),
  getters: {
    getList: (state) => state.list,
    getDetail: (state) => state.detail,
  },
  actions: {
    async fetchList() {
      this.list.isLoading = true;
      this.list.isError = false;
      try {
        const data = await postService.fetchList();
        this.list.isLoading = false;
        this.list.isLoading = false;
        this.list.data = data;
      } catch (error) {
        this.list.isLoading = false;
        this.list.isError = true;
        throw error;
      }
    },
    async add() {
      this.add.isLoading = true;
      setTimeout(() => {
        this.add.isLoading = false;
        this.add.isAdded = true;
      }, 2000);
    },
  },
});
