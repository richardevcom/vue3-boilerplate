<template>
  <MainLayout>
    <section class="bg-white dark:bg-gray-900">
      <input
        v-model.trim="name"
        type="text"
        id="first_name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="John"
        required
      />
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <ckeditor
          v-model="data"
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
  </MainLayout>
</template>
<script setup>
import { ref, onMounted } from "vue";
import MainLayout from "@/layout/HomeManagermentLayout.vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

async function handSubmit() {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      name: name.value,
      content: data.value,
    });
    console.log(docRef);
  } catch (error) {
    console.log(error);
  }
}

const data = ref("");
const name = ref("");
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

onMounted(async () => {
  console.log("mounted");
  const querySnapshot = await getDocs(collection(db, "posts"));
  console.log(querySnapshot);
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
});
</script>
