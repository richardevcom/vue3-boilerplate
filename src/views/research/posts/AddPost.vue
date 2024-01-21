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
    <button
      v-if="postId"
      class="text-white bg-red-700 hover:bg-red-800 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      @click="handDelete"
    >
      Delete
    </button>
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
        required
      />
    </div>
    <div>
      <label for="name">Short Description</label>
      <textarea
        v-model.trim="shortDescription"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
      </textarea>
    </div>

    <div class="max-w-screen-xl">
      <label for="name">Content</label>
      <ckeditor
        v-model="postContent"
        tag-name="textarea"
        :disable-two-way-data-binding="isTwoWayDataBindingDisabled"
        :editor="ClassicEditor"
        :config="config"
        :disabled="disabled"
        @ready="onReady"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
        @destroy="onDestroy"
      />
    </div>
    <button
      type="submit"
      @click="handSubmit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
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

async function handSubmit() {
  try {
    if (postId.value) {
      postStore.updatePost({
        id: postData.value.id,
        name: name.value,
        shortDescription: shortDescription.value,
        content: postContent.value,
      });
    } else {
      postStore.addPost({
        name: name.value,
        shortDescription: shortDescription.value,
        content: postContent.value,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

const postContent = ref("");
const name = ref("");
const postData = computed(() => postStore.detail.data);
const shortDescription = ref();
const disabled = ref(false);
const onReady = ref(false);
const isTwoWayDataBindingDisabled = ref(false);
const config = ref({
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "blockQuote",
    "insertTable",
    "undo",
    "redo",
  ],
});
const onFocus = ref(() => {});
const onBlur = ref(() => {});
const onInput = ref(() => {});
const onDestroy = ref(() => {});

function handDelete() {
  const isConfirm = window.confirm("Are you sure delete this post?");
  if (!isConfirm) return;
  isConfirm && postStore.deletePost(postData.value.id);
  window.alert("Delete success");
  postStore.fetchList();
}

onMounted(() => {
  if (postId.value) {
    postStore.fetchDetailPost(postId.value);
  }
});
watch([postData], () => {
  shortDescription.value = postStore.detail?.data?.shortDescription;
  name.value = postStore.detail?.data?.name;
  postContent.value = postStore.detail?.data?.content;
});
</script>
