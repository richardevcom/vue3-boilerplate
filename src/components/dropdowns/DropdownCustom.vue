<template>
  <!-- input -->
  <div class="flex gap-1 flex-wrap">
    <!-- list selected -->
    <div v-for="selectedItem of listSelected" :key="selectedItem.id">
      <div>{{ selectedItem.name }}</div>
    </div>
    <!-- input  -->
    <input v-model="inputValue" />
  </div>
  <!-- select -->
  <div v-if="isShow">
    <div :key="selectItem.id" v-for="selectItem of list">
      <div @click="listSelected.push(selectItem)">{{ selectItem.name }}</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const mockData = [
  { name: "Vue", id: 1 },
  { name: "React", id: 2 },
  { name: "Angular", id: 3 },
  { name: "Svelte", id: 4 },
  { name: "Next", id: 5 },
  { name: "Nuxt", id: 6 },
  { name: "Vite", id: 7 },
  { name: "Webpack", id: 8 },
  { name: "Rollup", id: 9 },
  { name: "Gulp", id: 10 },
];

const listSelected = ref([]);
const list = ref(mockData);
const inputValue = ref("");
const isShow = ref(false);
</script>
