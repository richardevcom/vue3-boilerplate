<template>
  <MainLayout>
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2
            class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white flex justify-center"
          >
            Select house or
            <HomeForm class="ml-2" @fetchHouse="fetchHouse" />
          </h2>
          <p
            class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
          >
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <HomeList :listHouse="listHouse" @fetchHouse="fetchHouse" />
      </div>
    </section>
  </MainLayout>
</template>
<script setup>
import MainLayout from "@/layout/HomeManagermentLayout.vue";
import HomeForm from "@/components/home-managerment/main-page/HomeForm.vue";
import HomeList from "@/components/home-managerment/main-page/HomeList.vue";
import { houseService } from "@/service/house";
import { ref, onMounted } from "vue";

const listHouse = ref([]);

async function fetchHouse() {
  console.log(123123);
  listHouse.value = await houseService.fetchList();
}

onMounted(async () => {
  await fetchHouse();
});
</script>
