<template>
  <!-- Action -->
  <div class="flex gap-2">
    <router-link :to="{ name: 'research-post-list' }">
      <button
        class="text-white bg-gray-700 hover:bg-gray-800 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Back
      </button>
    </router-link>
  </div>
  <section class="bg-white dark:bg-gray-900 grid gap-2">
    <div>
      <label for="name">Name</label>
      <input
        v-model.trim="name"
        type="text"
        id="name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Name"
        disabled
        required
      />
    </div>
    <div>
      <label for="name">Short Description</label>
      <textarea
        v-model.trim="shortDescription"
        disabled
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
      </textarea>
    </div>

    <div class="max-w-screen-xl">
      <label for="name">Content</label>
      <ckeditor
        v-model="postContent"
        disabled
        tag-name="textarea"
        :disable-two-way-data-binding="isTwoWayDataBindingDisabled"
        :editor="ClassicEditor"
        @ready="onReady"
      />
    </div>
  </section>
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { usePostResearchStore } from "@/stores/research";
import { useRoute } from "vue-router";

const route = useRoute();
const postId = computed(() => route.params.id);
const postStore = usePostResearchStore();

const postContent = ref("");
const name = ref("");
const postData = computed(() => postStore.detail.data);
const shortDescription = ref();
const onReady = ref(false);
const isTwoWayDataBindingDisabled = ref(false);

onMounted(() => {
  postStore.fetchDetailPost(postId.value);
});

watch([postData], () => {
  shortDescription.value = postStore.detail.data.shortDescription;
  name.value = postStore.detail.data.name;
  postContent.value = postStore.detail.data.content;
});
</script>
