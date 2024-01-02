<template>
  <div v-if="!isLoading">
    <div v-for="post of listPost" :key="post.id">
      <div class="flex gap-4">
        <!-- left -->
        <div
          class="w-1/2 bg-cover"
          :style="{
            backgroundImage:
              'url(https://channel.mediacdn.vn/428462621602512896/2023/11/24/photo-3-17007942587471244926029.jpg)',
          }"
        ></div>
        <!-- right -->
        <div class="w-1/2">
          <!-- tag  -->
          <div class="bg-blue-500 text-white rounded-sm w-max px-1 py-1">
            Vue
          </div>
          <!-- title -->
          <div class="text-2xl font-bold text-black">{{ post.name }}</div>
          <!-- poster + date -->
          <div class="flex gap-1 text-gray-500">
            <div>Admin</div>
            <div>January 23 2023</div>
          </div>
          <!-- short content -->
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            quidem maiores. Adipisci fugit quo eius quisquam ea quidem,
            possimus, eum fuga omnis provident debitis numquam commodi magnam
            obcaecati accusantium dolor....
          </div>
          <!-- action button -->
          <div>
            <button
              class="bg-white text-blue-500 rounded-md px-2 py-1 border border-blue-500"
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Loading ...</div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { usePostResearchStore } from "@/stores/research";

const store = usePostResearchStore();

const listPost = computed(() => {
    console.log(store.list.data);
  return store.list.data;
});
const isLoading = computed(() => store.list.isLoading);

onMounted(() => {
  store.fetchList();
});
</script>
