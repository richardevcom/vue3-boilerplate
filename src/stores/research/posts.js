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
    delete: {
      isLoading: false,
      isError: false,
      isDeleted: false,
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
        this.list.data = data;
      } catch (error) {
        console.log(error);
        this.list.isError = true;
        throw error;
      } finally {
        this.list.isLoading = false;
      }
    },
    async addPost(postData) {
      try {
        this.add.isLoading = true;
        await postService.createPost(postData);
        this.add.isAdded = true;
        this.add.isError = false;
      } catch (error) {
        console.log(error);
        this.add.isAdded = false;
        this.add.isError = true;
      } finally {
        this.add.isLoading = false;
      }
    },
    async updatePost(postData) {
      try {
        this.add.isLoading = true;
        await postService.updatePost(postData);
        this.add.isAdded = true;
        this.add.isError = false;
      } catch (error) {
        console.log(error);
        this.add.isAdded = false;
        this.add.isError = true;
      } finally {
        this.add.isLoading = false;
      }
    },
    async deletePost(id) {
      try {
        this.delete.isLoading = true;
        await postService.deletePost(id);
        this.delete.isError = false;
      } catch (error) {
        console.log(error);
        this.delete.isError = true;
        this.delete.isDeleted = false;
      } finally {
        this.delete.isLoading = false;
      }
    },
    async fetchDetailPost(id) {
      try {
        this.detail.isLoading = true;
        const data = await postService.getDetail(id);
        this.detail.data = data;
        this.detail.isError = false;
      } catch (error) {
        console.log(error);
        this.detail.isError = true;
      } finally {
        this.detail.isLoading = false;
      }
    },
  },
});
