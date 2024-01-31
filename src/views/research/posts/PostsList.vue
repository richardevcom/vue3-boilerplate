<template>
  <div>
    <input />
    <button @click="() => router.push({ name: 'research-post-add' })">
      Add new
    </button>
  </div>
  <div v-if="!isLoading" class="grid gap-2">
    <div v-for="post of listPost" :key="post.id">
      <div class="flex">
        <!-- left -->
        <div
          class="w-1/2 bg-cover"
          :style="{
            backgroundImage:
              'url(https://channel.mediacdn.vn/428462621602512896/2023/11/24/photo-3-17007942587471244926029.jpg)',
          }"
        ></div>
        <!-- right -->
        <div class="w-1/2 grid gap-1 pl-4">
          <!-- tag  -->
          <div class="bg-blue-500 text-white rounded-sm w-max px-1 py-1">
            JS
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
            {{ post.shortDescription }}
          </div>
          <!-- action button -->
          <div class="flex gap-2">
            <router-link
              :to="{ name: 'research-post-detail', params: { id: post.id } }"
            >
              <button
                class="bg-white text-blue-500 rounded-md px-2 py-1 border border-blue-500"
              >
                Read more
              </button>
            </router-link>
            <!-- <button
              class="bg-white text-red-500 rounded-md px-2 py-1 border border-red-500"
              @click="handDelete(post)"
            >
              Delete
            </button> -->
            <router-link
              :to="{ name: 'research-post-edit', params: { id: post.id } }"
            >
              <button
                class="bg-white text-yellow-500 rounded-md px-2 py-1 border border-yellow-500"
              >
                Edit
              </button>
            </router-link>
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
import { useRouter } from "vue-router";

const router = useRouter();
const store = usePostResearchStore();

// function handDelete(post) {
//   const isConfirm = window.confirm("Are you sure delete this post?");
//   if (!isConfirm) return;
//   isConfirm && store.deletePost(post.id);
//   window.alert("Delete success");
//   store.fetchList();
// }

const listPost = computed(() => {
  return store.list.data;
});
const isLoading = computed(() => store.list.isLoading);

onMounted(() => {
  store.fetchList();
});
</script>
